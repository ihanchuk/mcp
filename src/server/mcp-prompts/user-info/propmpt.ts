import { TPrompt } from "../types";
import { giveMeDetailsHandler } from "./handler";
import { userInfoRequest } from "./schema";

export const UserInfoPrompt: TPrompt<typeof userInfoRequest> = {
  name: "User Details Prompt",
  config: {
    title: "Shows User Details",
    description: "Some cool desc",
    argsSchema: userInfoRequest,
  },
  handler: giveMeDetailsHandler,
};
