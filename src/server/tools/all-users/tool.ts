import type { TTool } from "../../types/tool";
import { allUsersHandler } from "./handler";

export const listAllUsersTool: TTool = {
  name: "List-All-Users",

  config: {
    description: "Get complete list of Users",
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },

  handler: allUsersHandler,
};
