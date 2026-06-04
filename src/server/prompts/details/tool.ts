import { giveMeDetailsSchema } from "./schema";
import { giveMeDetailsHandler } from "./handler";

export const giveMeDetailsPrompt = {
  name: "give-me-details",

  config: {
    title: "Details",
    description: "Get details",
    argsSchema: giveMeDetailsSchema,
  },

  handler: giveMeDetailsHandler,
};
