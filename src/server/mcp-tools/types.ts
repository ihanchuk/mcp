import { InferShape, TZodRecord } from "../types/common.js";

export type ToolAnnotations = {
  readOnlyHint?: boolean;
  destructiveHint?: boolean;
  idempotentHint?: boolean;
  openWorldHint?: boolean;
};

export type ToolResponse = {
  content: Array<{ type: "text"; text: string }>;
};

export type TTool<TSchema extends TZodRecord> = {
  name: string;

  meta: {
    description: string;
    annotations?: ToolAnnotations;
  };

  schema: TSchema;

  handler: (args: InferShape<TSchema>) => Promise<ToolResponse>;
};

export type AnyTool = TTool<any>;
export { InferShape };
