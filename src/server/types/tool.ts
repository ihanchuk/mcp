import type { ZodTypeAny, z } from "zod";

export type TToolResponse = {
  content: { type: "text"; text: string }[];
};

export type TTool<TSchema extends ZodTypeAny> = {
  name: string;

  config: {
    description: string;
    inputSchema: TSchema;
    annotations?: {
      readOnlyHint?: boolean;
      destructiveHint?: boolean;
      idempotentHint?: boolean;
      openWorldHint?: boolean;
    };
  };

  handler: (input: z.infer<TSchema>) => Promise<TToolResponse>;
};
