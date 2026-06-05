import { z } from "zod";

export const userInfoRequest = {
  id: z.string(),
  email: z.string().optional(),
};
