export const Layout = ({ children }) => {
  const layoutStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
  };
  const commonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    minHeight: "100px",
  };

  return (
    <div style={layoutStyle}>
      <header style={commonStyle}>HEADER</header>
      <section>{children}</section>
      <footer style={commonStyle}>FOOTER</footer>
    </div>
  );
};
