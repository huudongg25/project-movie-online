import { Box, BoxProps } from "@mui/material";
import { AutoSwiperProps } from "../../types/type";
import { Swiper } from "swiper/react";

const AutoSwiper: React.FC<AutoSwiperProps & BoxProps> = ({
  children,
  ...rest
}) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: {
            xs: "50%",
            sm: "35%",
            md: "25%",
            lg: "20.5%",
          },
        },
      }}
      {...rest}
    >
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;
