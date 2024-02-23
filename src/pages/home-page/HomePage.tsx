import { FC } from "react";

import { Container } from "@mui/material";
import SigninForm from "components/signin-form/SigninForm";

const HomePage: FC = () => {
  return (
    <Container
      sx={{
        width: "40%",
        minWidth: "400px",
        paddingTop: "40px",
        textAlign: "center",
      }}
    >
      <SigninForm />
    </Container>
  );
};

export default HomePage;
