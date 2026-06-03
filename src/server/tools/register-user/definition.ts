import { registerUserSchema } from "./schema";

export const registerUserDefinition = {
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
};
