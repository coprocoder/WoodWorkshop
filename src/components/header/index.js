import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import {Slide, useMediaQuery, useScrollTrigger, useTheme} from "@mui/material";

import {ReactComponent as LogoMin} from "../../assets/logo_min.svg";
import {ReactComponent as LogoMax} from "../../assets/logo_max.svg";
import "./header.scss";
import HeaderMenuDrawer from "./menu/drawer";
import HeaderMenuFull from "./menu/lineMenu";

const HideOnScroll = (props) => {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{flexWrap: "wrap"}} className="header">
          {/* <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
            Company name
          </Typography> */}
          <Link
            variant="body2"
            color="text.primary"
            href={` ${process.env.PUBLIC_URL}/`}
            sx={{flexGrow: 1, my: 1, mx: 1.5}}
            className="header-logo"
          >
            {isMobile ? <LogoMin /> : <LogoMax />}
          </Link>

          {isMobile ? <HeaderMenuDrawer /> : <HeaderMenuFull />}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
