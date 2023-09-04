import { z } from "zod";

export const UpdateContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export type TUpadateContactSchema = z.infer<typeof UpdateContactSchema>;
