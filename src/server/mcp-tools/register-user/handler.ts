import { FAKE_USERS } from "../../stubs/stub";
import { InferShape } from "../types";
import type { registerUserSchema } from "./schema";

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
