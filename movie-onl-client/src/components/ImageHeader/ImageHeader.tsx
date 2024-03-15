import React from "react";
import { Box } from "@mui/material";
const ImageHeader = () => {
  return (
    <>
      <Box
        sx={{
          zIndex: "-1",
          position: "relative",
          paddingTop: { xs: "60%", sm: "40%", md: "35%" },
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundImage: `https://sportshub.cbsistatic.com/i/2024/01/23/de248daa-91b2-4951-a70d-2c9af184bb72/kung-fu-panda-4-characters.jpg`,
          backgroundAttachment: "fixed",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          },
        }}
      />
    </>
  );
};

export default ImageHeader;
