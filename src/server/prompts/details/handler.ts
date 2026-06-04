import { TGiveMeDetailsArgs } from "./schema";

export async function giveMeDetailsHandler(args: TGiveMeDetailsArgs) {
  return {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Agreement ${args.topic}`,
        },
      },
    ],
  };
}
