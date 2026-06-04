import { PromptMessage } from "@modelcontextprotocol/sdk/types";
import type { z } from "zod";

export type TPrompt<TArgs extends Record<string, z.ZodTypeAny>> = {
  name: string;

  config: {
    title: string;
    description: string;
    argsSchema: TArgs;
  };

  handler: (args: {
    [K in keyof TArgs]: z.infer<TArgs[K]>;
  }) => Promise<{
    messages: Array<PromptMessage>;
  }>;
};
