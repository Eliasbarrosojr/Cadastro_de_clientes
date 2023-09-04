import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
});

export type TRegister = z.infer<typeof RegisterSchema>;
