import type { RegisterUserInput } from "./schema.ts";
import { FAKE_USERS } from "./stub.js";

export async function registerUserHandler({ userState }: RegisterUserInput) {
  FAKE_USERS.push(userState);

  return {
    content: [
      {
        type: "text" as const,
        text: `User ${userState.name} was created`,
      },
    ],
  };
}
