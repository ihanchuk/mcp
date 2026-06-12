import { InferShape } from "../../types/common.js";
import { TPromptResponse } from "../types.js";
import { userInfoRequest } from "./schema.js";

export async function giveMeDetailsHandler(
  args: InferShape<typeof userInfoRequest>,
): Promise<TPromptResponse> {
  const { id, email } = args;

  return {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Give me details about user with id ${id} and email ${email}`,
        },
      },
    ],
  };
}
