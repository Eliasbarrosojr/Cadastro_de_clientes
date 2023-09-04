import styled from "styled-components";
import { StyleButtons } from "../../style/GlobalStyle";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70vh;

  position: absolute;
  top: 0px;

  background-color: #111214c2;
`;

export const Form = styled.form`
  width: 369px;
  max-width: 95%;
  height: 342px;
  border: solid 1px var(--grey-3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--grey-3);
  padding-bottom: 12px;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 12px;
  background-color: var(--grey-2);
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  button {
    ${StyleButtons}
    width: 12px;
    height: 12px;
    background-color: var(--grey-2);
    align-items: center;
    display: flex;
    justify-content: center;
    border: none;

    font-size: 22px;
    color: var(--grey-1);
  }
`;

export const InputUpDate = styled.fieldset`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 12px;
  box-sizing: border-box;
  label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
  }

  input {
    width: 324px;
    max-width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: var(--grey-2);
    border: solid 1px var(--grey-1);
    color: var(--grey-0);
    padding: 0px 8px;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  gap: 8px;

  p {
    font-weight: 400;
    font-size: 12.182px;
  }

  select {
    width: 100%;
    height: 48px;
    background-color: var(--grey-2);
    border-radius: 6px;

    color: var(--grey-0);
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 327px;
  gap: 22px;
`;

export const ButtonUp = styled.button`
  ${StyleButtons}
  background-color: var(--color-negative);
  border: none;
  color: var(--grey-0);
  width: 204px;
  height: 48px;
`;

export const ButtonRemove = styled.button`
  ${StyleButtons}
  background-color: var(--grey-1);
  border: none;
  color: var(--grey-0);
  width: 98px;
  height: 48px;
`;
