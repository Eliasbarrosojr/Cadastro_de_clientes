import styled from "styled-components";
import { StyleButtons } from "../../style/GlobalStyle";

export const HeaderDiv = styled.header`
  display: flex;
  width: 100%;
  height: 72px;
  box-shadow: 0px 0px 6px 0px;
  justify-content: space-around;
  align-items: center;

  img {
    width: 144px;
  }

  button {
    ${StyleButtons}
    width: 56px;
    height: 32px;

    background-color: var(--grey-3);
    color: var(--grey-0);
    border: solid 1px var(--grey-1);
  }
`;

export const DivLogo = styled.div`
  width: 780px;
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
