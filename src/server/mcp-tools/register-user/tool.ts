import { registerUserSchema } from "./schema.js";
import { registerUserHandler } from "./handler.js";
import { TTool } from "../types.js";

export const registerUserTool: TTool<typeof registerUserSchema> = {
  name: "Register-User",

  meta: {
    description: "Register user",
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
    },
  },

  schema: registerUserSchema,

  handler: registerUserHandler,
};
