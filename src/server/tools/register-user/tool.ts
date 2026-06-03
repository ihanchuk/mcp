import { registerUserSchema } from "./schema";
import { registerUserHandler } from "./handler";

import type { TTool } from "../../types/tool";

export const registerUserTool: TTool<typeof registerUserSchema> = {
  name: "Register-new-User",

  config: {
    description: "Registration of new User",
    inputSchema: registerUserSchema,
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
    },
  },

  handler: registerUserHandler,
};
