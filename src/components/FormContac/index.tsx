import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Modal, Title } from "./style";
import { LoginContext } from "../../providers/LoginProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateContactSchema, TCreateContactSchema } from "./validator";
import { InputStyle } from "../../pages/Login/style";

export function FormContact() {
  const { CreateContact, setOpenForm } = useContext(LoginContext);
  const { register, handleSubmit } = useForm<TCreateContactSchema>({
    resolver: zodResolver(CreateContactSchema),
  });

  return (
    <Modal>
      <Form onSubmit={handleSubmit(CreateContact)}>
        <Title>
          <h2>Cadastrar tecnologia</h2>
          <button onClick={() => setOpenForm(true)}>Fechar</button>
        </Title>

        <InputStyle
          type="name"
          id="name"
          placeholder="Nome"
          {...register("name")}
        />
        <label htmlFor="email">Email</label>
        <InputStyle
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email")}
        />

        <label htmlFor="phone">Telefone</label>
        <InputStyle
          type="phone"
          id="phone"
          placeholder="Telefone"
          {...register("phone")}
        />

        <button type="submit">Criar contato</button>
      </Form>
    </Modal>
  );
}
