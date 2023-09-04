import { z } from "zod";

export const CreateContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().refine((str) => Number(str)),
});

export type TCreateContactSchema = z.infer<typeof CreateContactSchema>;
