import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Constants } from "../../../../shared/const";

type IProps = {
  onClick: () => void;
};

const Header: React.FC<IProps> = props => (
  <AppBar position="static">
    <Toolbar>
      <IconButton onClick={props.onClick} edge="start" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">{Constants.AppName}</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
