import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

const layoutStyle = {
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  minHeight: "100vh",
};

export const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};
