import { z } from "zod";

export const registerUserSchema = {
  userState: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    address: z.string(),
    phone: z.string(),
  }),
};

export type RegisterUserInput = {
  userState: z.infer<typeof registerUserSchema.userState>;
};
