import { z } from "zod";

export type InferShape<T extends Record<string, z.ZodTypeAny>> = {
  [K in keyof T]: z.infer<T[K]>;
};

export type TZodRecord = Record<string, z.ZodTypeAny>;
