import React from "react";
import { Box, Button } from "@material-ui/core";

import navItems from "./config/navItems";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      {navItems.map(({ title, path }) => (
        <Link to={path} key={path}>
          <Button variant="outlined">{title}</Button>
        </Link>
      ))}
    </Box>
  );
};

export default Header;
