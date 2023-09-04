import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonRemove, Buttons, ButtonUp, Form, Modal, Title } from "./style";
import { LoginContext } from "../../providers/LoginProvider";
import { InputStyle } from "../../pages/Login/style";
import { TUpadateContactSchema } from "./validator";

export function UpDateContact() {
  const { UpdateContact, DeleteContact, editionContact, setEditionContact } =
    useContext(LoginContext);
  const { register, handleSubmit } = useForm<TUpadateContactSchema>();

  function remove(id: string) {
    DeleteContact(id);
  }

  return (
    <Modal>
      <Form onSubmit={handleSubmit(UpdateContact)}>
        <Title>
          <h2>Contatos Detalhes</h2>
          <button onClick={() => setEditionContact(null)}>X</button>
        </Title>

        <InputStyle
          type="name"
          id="name"
          placeholder="Nome"
          {...register("name")}
        />
        <InputStyle
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email")}
        />
        <InputStyle
          type="phone"
          id="phone"
          placeholder="Telefone"
          {...register("phone")}
        />

        <Buttons>
          <ButtonUp type="submit">Salvar alterações</ButtonUp>
          <ButtonRemove
            type="button"
            onClick={() => remove(editionContact!.id)}
          >
            Excluir
          </ButtonRemove>
        </Buttons>
      </Form>
    </Modal>
  );
}
