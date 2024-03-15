import React from "react";
import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";

const MovieVideo = () => {
  return (
    <Box sx={{ height: "max-content" }}>
      <iframe width="100%" style={{ border: 0 }}></iframe>
    </Box>
  );
};
const MovieSlide = () => {
  return (
    <>
      <SwiperSlide>
        <MovieVideo />
      </SwiperSlide>
    </>
  );
};

export default MovieSlide;
