import { allUserSchema } from "./schema";
import { allUserHandler } from "./handler";
import { TTool } from "../types";

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
