import { FAKE_USERS } from "../../stubs/stub";
import { InferShape } from "../types";
import type { allUserSchema } from "./schema";

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
