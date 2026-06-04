import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { z } from "zod";
import type { TPrompt } from "../types/prompts";

const giveMeDetailsSchema = {
  topic: z.string().min(3),
};

export const registerPrompts = (server: McpServer) => {
  const cb: TPrompt<typeof giveMeDetailsSchema>["handler"] = async (args) => {
    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Give me details about agreement with id: ${args.topic}`,
          },
        },
      ],
    };
  };

  const mainPrompt: TPrompt<typeof giveMeDetailsSchema> = {
    name: "main",
    config: {
      title: "title",
      description: "desc",
      argsSchema: giveMeDetailsSchema,
    },
    handler: cb,
  };

  server.registerPrompt(
    mainPrompt.name,
    {
      title: mainPrompt.config.title,
      description: mainPrompt.config.description,
      argsSchema: mainPrompt.config.argsSchema,
    },
    mainPrompt.handler,
  );
};
