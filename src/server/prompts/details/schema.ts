import { z } from "zod";

export const giveMeDetailsSchema = {
  topic: z.string().min(3),
};

export type TGiveMeDetailsArgs = {
  topic: string;
};
