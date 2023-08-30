import styled from "styled-components";
import { StyleButtons } from "../../style/GlobalStyle";

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  width: 369px;
  max-width: 90%;
  height: 557.67px;

  img {
    width: 144px;
  }
  @media (max-width: 500px) {
    height: 480px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 369px;
  max-width: 100%;
  height: 502px;
  padding: 6px;
  background-color: var(--grey-3);
  justify-content: space-evenly;

  a {
    background-color: var(--grey-1);
    border: solid 1px var(--grey-1);
    color: var(--grey-0);
  }

  label {
    font-weight: 400;
    font-size: 24px;
    line-height: 0px;
  }
`;

export const InputStyle = styled.input`
  width: 324px;
  max-width: 100%;
  height: 48px;

  border-radius: 8px;
  background-color: var(--color-gray-200);
  border: solid 1px var(--color-gray-600);
  color: var(--color-gray-900);
  padding: 0px 8px;

  :focus {
    border: solid 1px var(--grey-0);
  }
`;

export const ButtonEnter = styled.button`
  ${StyleButtons}
  color: var(--color-gray-200);
  background-color: var(--color-blue-600);
  border: var(--color-gray-200);
`;

export const ButtonRegister = styled.button`
  ${StyleButtons}
  background-color: var(--color-blue-600);
  border: var(--color-gray-200);
`;
