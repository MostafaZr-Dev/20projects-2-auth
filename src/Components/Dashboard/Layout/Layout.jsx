import React, { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import {
  AccountCircle,
  Close,
  ExitToApp,
  Menu as MenuIcon,
} from "@material-ui/icons";
import { styled, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Sidebar from "./Components/Sidebar";
import { useAppState } from "State";

const Header = styled(AppBar)({
  backgroundColor: "#f50057",
});

const Body = styled(Grid)({
  paddingTop: "64px",
  height: `100vh`,
});

const ContentWrapper = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundColor: "#f5f5f5",
  borderRadius: 0,
  padding: theme.spacing(3),
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(1.5),
}));

const DrawerButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },

  [theme.breakpoints.down("xs")]: {
    display: "inline-flex",
  },
}));

const DrawerMenu = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "70%",
  },
});

function Layout({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("xs"));

  const { dispatch } = useAppState();

  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: "SET_USER",
      payload: {
        user: null,
        isAuthenticate: false,
      },
    });
  };

  const openDrawer = (e) => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = (e) => {
    setIsDrawerOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Header>
          <Toolbar>
            <DrawerButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawer}
            >
              <MenuIcon />
            </DrawerButton>
            <TitleWrapper>
              <Typography variant="h6" noWrap>
                Dashboard
              </Typography>
            </TitleWrapper>
            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                getContentAnchorEl={null}
                open={anchorEl ? true : false}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="menu"
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToApp fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Header>
      </Grid>
      <Grid item xs={12} md={12}>
        <Body container direction="row">
          {isSmallDevice && (
            <DrawerMenu anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={closeDrawer}
                color="inherit"
              >
                <Close />
              </IconButton>
              <Sidebar />
            </DrawerMenu>
          )}
          {!isSmallDevice && (
            <Grid item xs={4} sm={4} md={3} lg={3}>
              <Sidebar />
            </Grid>
          )}
          <Grid item xs={12} sm={8} md={9} lg={9}>
            <ContentWrapper>{children}</ContentWrapper>
          </Grid>
        </Body>
      </Grid>
    </Grid>
  );
}

export default Layout;
