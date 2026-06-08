import { allUserSchema } from "./schema.js";
import { allUserHandler } from "./handler.js";
import { TTool } from "../types.js";

export const allUsersTool: TTool<typeof allUserSchema> = {
  name: "All-User",

  meta: {
    description: "Show All Users",
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
    },
  },

  schema: allUserSchema,

  handler: allUserHandler,
};
