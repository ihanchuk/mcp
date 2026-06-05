import { connect } from "nats";
import * as N from "nats";

const nc = await connect({
  name: "node-connection-main",
  servers: "nats://localhost:4222",
});

const sc = N.StringCodec();

// const sub = nc.subscribe("test.one");

// (async () => {
//   for await (const m of sub) {
//     const counter = `[${sub.getProcessed()}]`;
//     const mes = JSON.parse(m.string());

//     console.log(`${counter} : from ${mes["from"]}`);
//   }
//   console.log("subscription closed");
// })();

const testOneSub = nc.subscribe("test.one", {
  callback(err, msg) {
    if (!err) {
      const mes = JSON.parse(msg.string());
      console.log(mes);
      const mes2 = JSON.parse(sc.decode(msg.data));
      console.log(mes2.from);
    }
  },
  max: 1,
});

console.log("connected");
