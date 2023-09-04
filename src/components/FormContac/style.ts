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

  button {
    ${StyleButtons}
    border: none;
    width: 342px;
    background-color: var(--color-primary);

    color: var(--grey-0);
  }
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
