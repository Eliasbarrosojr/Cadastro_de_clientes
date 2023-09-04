import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TLogin, schema } from "./validator";
import { useContext } from "react";
import { LoginContext } from "../../providers/LoginProvider";
import { ButtonEnter, ContainerMain, FormContainer, InputStyle } from "./style";
import { Link } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm<TLogin>({
    resolver: zodResolver(schema),
  });
  const { loginUser } = useContext(LoginContext);

  return (
    <ContainerMain>
      <h2>Login</h2>

      <FormContainer onSubmit={handleSubmit(loginUser)}>
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

        <ButtonEnter type="submit">Entrar</ButtonEnter>
        <Link to="register">Cadastre-se</Link>
      </FormContainer>
    </ContainerMain>
  );
};
