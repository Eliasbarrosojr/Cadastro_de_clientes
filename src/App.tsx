import { LoginProvider } from "./providers/LoginProvider";
import { RoutesAll } from "./routes";
import GlobalStyle from "./style/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <LoginProvider>
        <RoutesAll />
      </LoginProvider>
    </>
  );
};

export default App;
