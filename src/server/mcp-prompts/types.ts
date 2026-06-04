import { InferShape, TZodRecord } from "../types/common";
import type { PromptMessage } from "@modelcontextprotocol/sdk/types";

export type TPromptResponse = {
  messages: Array<PromptMessage>;
};

export type TPrompt<TSchema extends TZodRecord> = {
  name: string;

  config: {
    title: string;
    description: string;
    argsSchema: TSchema;
  };

  handler: (args: InferShape<TSchema>) => Promise<TPromptResponse>;
};

export type AnyPrompt = TPrompt<any>;
