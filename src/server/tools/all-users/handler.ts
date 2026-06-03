import { FAKE_USERS } from "../../stubs/stub";
import type { TToolResponse } from "../../types/tool";

export const allUsersHandler = async (): Promise<TToolResponse> => {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify({ users: FAKE_USERS }, null, 2),
      },
    ],
  };
};
