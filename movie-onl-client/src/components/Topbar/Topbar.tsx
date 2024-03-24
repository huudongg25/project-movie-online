import React, { cloneElement, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Logo from "../Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import menuConfigs from "../../configs/menu.config";
import { Link } from "react-router-dom";
import { setAuthModalOpen } from "../../redux/ModalOpen";
import { ScrollProps } from "../../types/type";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "../UserMenu/UserMenu";
const ScrollAppBar: React.FC<ScrollProps> = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: {
      color: trigger ? "text.primary" : "text.primary",
      backgroundColor: trigger ? "background.paper" : "background.paper",
    },
  });
};

const Topbar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { appState } = useSelector((state: RootState) => state.appState);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <Logo />
              </Box>
            </Stack>

            {/* main menu */}
            <Box
              flexGrow={1}
              alignItems="center"
              display={{ xs: "none", md: "flex" }}
            >
              <Box sx={{ marginRight: "30px" }}>
                <Logo />
              </Box>
              {menuConfigs.main.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: appState.includes(item.state)
                      ? "primary.contrastText"
                      : "inherit",
                    mr: 2,
                  }}
                  component={Link}
                  to={item.path}
                  variant={appState.includes(item.state) ? "contained" : "text"}
                >
                  {item.display}
                </Button>
              ))}
            </Box>
            {/* main menu */}

            {/* user menu */}
            <Stack spacing={3} direction="row" alignItems="center">
              {!user && (
                <Button
                  variant="contained"
                  onClick={() => dispatch(setAuthModalOpen(true))}
                >
                  sign in
                </Button>
              )}
            </Stack>
            {user && <UserMenu />}
            {/* user menu */}
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
      Topbar
    </>
  );
};

export default Topbar;
