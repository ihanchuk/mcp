import type { TRegisterUserInput } from "./schema";
import { FAKE_USERS } from "../../stubs/stub";

export async function registerUserHandler(input: TRegisterUserInput) {
  const { userState } = input;

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
