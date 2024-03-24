import { Box, LinearProgress, Paper, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Loading = () => {
  const { globalLoading } = useSelector(
    (state: RootState) => state.globalLoading
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [globalLoading]);
  return (
    <div>
      <Paper
        sx={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: "none",
          transition: "all .3s ease",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 999,
        }}
      >
        <Toolbar />
        <LinearProgress />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Logo />
        </Box>
      </Paper>
    </div>
  );
};

export default Loading;
