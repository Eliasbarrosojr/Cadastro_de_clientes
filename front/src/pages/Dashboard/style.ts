import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  width: 100%;
`;

export const MainLoading = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const SectionUser = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 780px;
  max-width: 100%;
  height: 108px;

  border-bottom: solid 2px var(--grey-3);
`;

export const SectionTec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 780px;
  max-width: 100%;
  height: 108px;
`;

export const TecDescript = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 780px;
  max-width: 100%;
  height: 108px;

  div {
    width: 33px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    border-radius: 4px;
  }

  button {
    width: 30px;
    height: 30px;
    background-color: var(--grey-3);
    border: none;
  }
`;

export const TecList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  width: 780px;
  max-width: 100%;
  padding: 12px;
  margin-top: 16px;
  border-radius: 8px;

  background-color: var(--grey-3);
`;
