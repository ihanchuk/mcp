import { z } from "zod";

export const userInfoRequest = {
  state: z.object({
    id: z.string(),
    email: z.string().optional(),
  }),
};
