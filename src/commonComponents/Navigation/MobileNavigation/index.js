import React, { useCallback } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItem } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

import navItems from "../../Header/config/navItems";

import styles from "./styles";

const MobileNavigation = ({ classes }) => {
  const history = useHistory();
  const [isOpen, setOpen] = React.useState(false);

  const handleDrawerOpen = useCallback(() => setOpen(true), [isOpen]);

  const handleDrawerClose = useCallback(() => setOpen(false), [isOpen]);

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    history.go(0);
  }, []);

  return (
    <>
      <Button className={classes.menuButton} onClick={handleDrawerOpen}>
        <MenuIcon />
      </Button>
      <Drawer
        classes={{
          paper: classes.drawerWrapper,
        }}
        open={isOpen}
      >
        <Box className={classes.backWrapper} onClick={handleDrawerClose}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Divider />
        {navItems.map(({ title, path }) => (
          <MenuItem key={path} onClick={handleDrawerClose}>
            <Link className={classes.menuItem} to={path}>
              {title}
            </Link>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <Typography className={classes.menuItem}>Log Out</Typography>
        </MenuItem>
      </Drawer>
    </>
  );
};

export default React.memo(withStyles(styles)(MobileNavigation));
