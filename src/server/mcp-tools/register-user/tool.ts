import { registerUserSchema } from "./schema";
import { registerUserHandler } from "./handler";
import { TTool } from "../types";

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
