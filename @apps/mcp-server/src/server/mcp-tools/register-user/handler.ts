import { FAKE_USERS } from "../../stubs/stub.js";
import { InferShape } from "../types.js";
import type { registerUserSchema } from "./schema.js";

type Args = InferShape<typeof registerUserSchema>;

export async function registerUserHandler(args: Args) {
  FAKE_USERS.push(args.userState);

  return {
    content: [
      {
        type: "text" as const,
        text: `User ${args.userState.name} created`,
      },
    ],
  };
}
