import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import { Layout } from "../layout/layout";
import { ReduxProvider } from "../../redux/provider";

import "./app.css";

export const App = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>{children}</Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </ReduxProvider>
  );
};

export default App;
