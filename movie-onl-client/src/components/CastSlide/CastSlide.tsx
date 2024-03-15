import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const CastSlide = () => {
  return (
    <>
      <Box
        sx={{
          "& .swiper-slide": {
            width: { xs: "50%", md: "25%", lg: "20.5%" },
            color: "primary.contrastText",
          },
        }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          grabCursor={true}
          style={{ width: "100%", height: "max-content" }}
        >
          <SwiperSlide>
            <Link to="#">
              <Box
                sx={{
                  paddingTop: "120%",
                  color: "text.primary",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "max-content",
                    bottom: 0,
                    padding: "10px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                  }}
                >
                  <Typography>Cast name</Typography>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default CastSlide;
