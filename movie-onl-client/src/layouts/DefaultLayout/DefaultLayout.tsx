import React, { ReactNode } from "react";
import Loading from "../../components/Loading/Loading";
import AuthModal from "../../components/AuthModal/AuthModal";
import { Box } from "@mui/material";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Loading />
      {/* login modal */}
      <AuthModal />
      <Box display="flex" minHeight="100vh">
        {/* header */}
        <Topbar />
        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
      </Box>
      {/* footer */}
      <Footer />
    </>
  );
};

export default DefaultLayout;
