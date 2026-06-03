import type { z } from "zod";

export type TToolResponse = {
  content: { type: "text"; text: string }[];
};

export type TToolAnnotation = {
  readOnlyHint?: boolean;
  destructiveHint?: boolean;
  idempotentHint?: boolean;
  openWorldHint?: boolean;
};

type TToolWithInput<TSchema extends z.ZodType> = {
  name: string;

  config: {
    description: string;
    inputSchema: TSchema;
    annotations?: TToolAnnotation;
  };

  handler: (input: z.infer<TSchema>) => Promise<TToolResponse>;
};

type TToolVoidInput = {
  name: string;

  config: {
    description: string;
    annotations?: TToolAnnotation;
  };

  handler: () => Promise<TToolResponse>;
};

export type TTool<TSchema extends z.ZodType | undefined = undefined> =
  TSchema extends z.ZodType ? TToolWithInput<TSchema> : TToolVoidInput;
