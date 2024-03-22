import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { SidebarProps } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import uiConfigs from "../../configs/UI.config";
import { RootState } from "../../redux/store";
import Logo from "../Logo/Logo";
import menuConfigs from "../../configs/menu.config";
import { Link } from "react-router-dom";

const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.user);
  const { appState } = useSelector((state: RootState) => state.appState);

  const sidebarWidth = uiConfigs.size.sidebarWith;

  const drawer = (
    <>
      <Toolbar sx={{ paddingY: "20px", color: "text.primary" }}>
        <Stack width="100%" direction="row" justifyContent="center">
          <Logo />
        </Stack>
      </Toolbar>
      <List sx={{ paddingX: "30px" }}>
        <Typography variant="h6" marginBottom="20px">
          MENU
        </Typography>
        {menuConfigs.main.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              borderRadius: "10px",
              marginY: 1,
              backgroundColor: appState.includes(item.state)
                ? "primary.main"
                : "unset",
            }}
            component={Link}
            to={item.path}
            onClick={() => toggleSidebar(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography textTransform="uppercase">
                  {item.display}
                </Typography>
              }
            />
          </ListItemButton>
        ))}

        {user && (
          <>
            <Typography variant="h6" marginBottom="20px">
              PERSONAL
            </Typography>
            {menuConfigs.user.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{
                  borderRadius: "10px",
                  marginY: 1,
                  backgroundColor: appState.includes(item.state)
                    ? "primary.main"
                    : "unset",
                }}
                component={Link}
                to={item.path}
                onClick={() => toggleSidebar(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography textTransform="uppercase">
                      {item.display}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
          </>
        )}
      </List>
    </>
  );

  return (
    <>
      <Drawer
        open={open}
        onClose={() => toggleSidebar(false)}
        sx={{
          "& .MuiDrawer-Paper": {
            boxSizing: "border-box",
            widh: sidebarWidth,
            borderRight: "0px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
