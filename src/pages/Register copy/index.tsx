import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ContainerMain, Divheader } from "./style";
import { FormRegister } from "./style";
import { RegisterSchema, TRegister } from "./validator";
import { useContext } from "react";
import { LoginContext } from "../../providers/LoginProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputStyle } from "../Login/style";

export function RegisterPage() {
  const { createUser } = useContext(LoginContext);
  const { register, handleSubmit } = useForm<TRegister>({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <ContainerMain>
      <Divheader>
        <Link to="/">Voltar</Link>
      </Divheader>
      <FormRegister onSubmit={handleSubmit(createUser)}>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <label htmlFor="name">Nome</label>
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
        <label htmlFor="password">Senha</label>
        <InputStyle
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        <label htmlFor="phone">Telefone</label>
        <InputStyle
          type="phone"
          id="phone"
          placeholder="Telefone"
          {...register("phone")}
        />
        <button type="submit">Cadastrar</button>
      </FormRegister>
    </ContainerMain>
  );
}
