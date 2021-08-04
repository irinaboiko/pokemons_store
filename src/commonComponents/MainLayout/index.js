import React from "react";
import { Box, Container } from "@material-ui/core";
import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Box>{children}</Box>
    </Container>
  );
};

export default MainLayout;
