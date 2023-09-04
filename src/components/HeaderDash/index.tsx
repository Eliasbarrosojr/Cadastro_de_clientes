import { useContext } from "react";
import { HeaderDiv, DivLogo } from "./style";
import { LoginContext } from "../../providers/LoginProvider";

export const Header = () => {
  const { Logout } = useContext(LoginContext);
  return (
    <HeaderDiv>
      <DivLogo>
        <h1>Cadastro de usuários</h1>
        <button onClick={() => Logout()}>Sair</button>
      </DivLogo>
    </HeaderDiv>
  );
};
