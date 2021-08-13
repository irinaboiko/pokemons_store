import React from "react";
import { Box, Container } from "@material-ui/core";
import Header from "../Header";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  console.log(isAuth);

  return (
    <Container>
      {isAuth && <Header />}
      <Box>{children}</Box>
    </Container>
  );
};

export default MainLayout;
