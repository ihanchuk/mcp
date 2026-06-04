import { z } from "zod";

export const registerUserSchema = z.object({
  userState: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    address: z.string(),
    phone: z.string(),
    id: z.string().optional().nullable(),
  }),
});

export type TRegisterUserInput = z.infer<typeof registerUserSchema>;
