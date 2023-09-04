import styled from "styled-components";
import { StyleButtons } from "../../style/GlobalStyle";

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 975px;
  gap: 12px;
  margin: 8px;

  a {
    ${StyleButtons}
    width: 68px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    color: var(--grey-0);
    border: none;
  }
`;

export const Divheader = styled.div`
  display: flex;
  width: 361px;
  max-width: 100%;
  justify-content: space-between;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 369px;
  max-width: 100%;
  min-height: 735px;
  height: auto;
  padding: 6px 6px 12px;

  background-color: var(--grey-3);

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }

  p {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    text-align: left;
  }

  button {
    ${StyleButtons}
    background-color: var(--color-negative);
    border: solid 1px var(--color-negative);
    color: var(--grey-0);

    margin-top: 8px;
  }

  select {
    width: 324px;
    max-width: 100%;
    height: 48px;

    background-color: var(--grey-3);
    color: var(--grey-1);
    border-radius: 8px;
  }
`;

export const Parag = styled.div`
  display: flex;
  width: 90%;
`;
