import { connect, StringCodec } from "nats";

const sc = StringCodec();

const Faked_Users = [
  { id: 1, name: "Alex Pereira" },
  { id: 2, name: "Connor McGregor" },
];

async function start() {
  try {
    console.log("⏳ Connecting to NATS...");

    const nc = await connect({
      name: "node-connection-main",
      servers: "nats://localhost:4222",
    });

    console.log("✅ Connected to NATS");

    // 🔥 connection health events
    nc.closed().then((err) => {
      console.error("❌ NATS connection closed", err);
      process.exit(1);
    });

    const sub = nc.subscribe("users.all");

    console.log("👂 Subscribed to users.all");
    console.log("🚀 User service is READY");

    for await (const msg of sub) {
      try {
        const payload = JSON.parse(sc.decode(msg.data));

        console.log("📩 Request received:", payload);

        msg.respond(
          JSON.stringify({
            ok: true,
            data: Faked_Users,
          }),
        );
      } catch (e) {
        console.error("❌ Message handling error:", e);
      }
    }
  } catch (err) {
    console.error("❌ Failed to connect to NATS:", err);
    process.exit(1);
  }
}

start();
