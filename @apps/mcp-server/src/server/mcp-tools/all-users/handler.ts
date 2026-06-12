import { FAKE_USERS } from "../../stubs/stub.js";
import { InferShape } from "../types.js";
import type { allUserSchema } from "./schema.js";

type Args = InferShape<typeof allUserSchema>;

export async function allUserHandler(args: Args) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(FAKE_USERS, null, 2),
      },
    ],
  };
}
