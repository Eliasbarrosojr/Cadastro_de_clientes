import { z } from "zod";

export const schema = z.object({
  email: z.string().email("E-mail inválido."),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type TLogin = z.infer<typeof schema>;
