import styled from "styled-components";

export const DivInputs = styled.fieldset`
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
`;

export const InputStyle = styled.input`
  width: 324px;
  max-width: 100%;
  height: 48px;

  border-radius: 8px;
  background-color: var(--grey-2);
  border: solid 1px var(--grey-1);
  color: var(--grey-0);
  padding: 0px 8px;

  :focus {
    border: solid 1px var(--grey-0);
  }
`;
