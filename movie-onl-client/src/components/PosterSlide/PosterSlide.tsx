import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import AutoSwiper from "../AutoSwiper/AutoSwiper";
import tmdbConfigs from "../../configs/tmdb.config";

interface PosterSlideProps {
  posters: { file_path: string }[];
}

const PosterSlide: React.FC<PosterSlideProps> = ({ posters }) => {
  return (
    <AutoSwiper>
      {[...posters].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              paddingTop: "160%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${tmdbConfigs.posterPath(item.file_path)})`,
            }}
          />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default PosterSlide;
