import React, { useCallback } from "react";
import { Button, Divider, Typography, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@mui/material";
import navItems from "../../Header/config/navItems";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles";

const MainNavigation = ({ classes }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    history.go(0);
  }, []);

  return (
    <>
      <Button className={classes.menuButton} onClick={handleMenuClick}>
        <MenuIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {navItems.map(({ title, path }) => (
          <MenuItem key={path} onClick={handleMenuClose}>
            <Link className={classes.menuItem} to={path}>
              {title}
            </Link>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <Typography className={classes.menuItem}>Log Out</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default React.memo(withStyles(styles)(MainNavigation));
