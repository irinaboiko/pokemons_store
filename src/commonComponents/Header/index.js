import React, { useCallback } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

import CartButton from "../Buttons/CartButton";
import MobileNavigation from "../Navigation/MobileNavigation";
import DesktopNavigation from "../Navigation/DesktopNavigation";

import styles from "./styles";

const Header = ({ classes }) => {
  const history = useHistory();

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    history.go(0);
  }, []);

  return (
    <Box className={classes.headerWrapper}>
      {isTabletOrMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <Box>
        {!isTabletOrMobile && (
          <Button className={classes.logoutButton} onClick={handleLogOut}>
            Log Out
          </Button>
        )}
        <CartButton />
      </Box>
    </Box>
  );
};

export default React.memo(withStyles(styles)(Header));
