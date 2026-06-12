import { TPrompt } from "../types.js";
import { giveMeDetailsHandler } from "./handler.js";
import { userInfoRequest } from "./schema.js";

export const UserInfoPrompt: TPrompt<typeof userInfoRequest> = {
  name: "User Details Prompt",
  config: {
    title: "Shows User Details",
    description: "Some cool desc",
    argsSchema: userInfoRequest,
  },
  handler: giveMeDetailsHandler,
};
