import { FC, PropsWithChildren } from "react";
import { Container } from "@mui/material";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div style={{ border: "1px solid blue" }}>Header</div>
      <Container component="main">{children}</Container>
    </>
  );
};

export default Layout;
