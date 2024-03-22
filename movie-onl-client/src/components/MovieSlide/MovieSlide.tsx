// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import { SwiperSlide } from "swiper/react";
// import { MovieSlideProps } from "../../types/type";
// import { toast } from "react-toastify";
// import MovieItem from "../MovieItem/MovieItem";
// import AutoSwiper from "../AutoSwiper/AutoSwiper";

// const MovieVideo: React.FC<MovieSlideProps> = ({
//   mediaType,
//   mediaCategory,
// }) => {
//   const [medias, setMedias] = useState<Media[]>([]);

//   useEffect(() => {
//     const getMedias = async () => {
//       const { response, err } = await mediaApi.getList({
//         mediaType,
//         mediaCategory,
//         page: 1,
//       });

//       if (response) setMedias(response.results);
//       if (err) toast.error(err.message);
//     };

//     getMedias();
//   }, [mediaType, mediaCategory]);
//   return (
//     <Box sx={{ height: "max-content" }}>
//       <iframe width="100%" style={{ border: 0 }}></iframe>
//     </Box>
//   );
// };
// const MovieSlide = () => {
//   return (
//     <Box sx={{ height: "max-content" }} {...rest}>
//       <AutoSwiper>
//         {medias.map((media, index) => (
//           <SwiperSlide key={index}>
//             <MovieItem media={media} mediaType={mediaType} />
//           </SwiperSlide>
//         ))}
//       </AutoSwiper>
//     </Box>
//   );
// };

// export default MovieSlide;
import React, { useEffect, useState } from "react";
import { MovieSlideProps } from "../../types/type";
import { toast } from "react-toastify";
import AutoSwiper from "../AutoSwiper/AutoSwiper";
import MovieItem from "../MovieItem/MovieItem";
import { SwiperSlide } from "swiper/react";

const MovieSlide: React.FC<MovieSlideProps> = ({
  mediaType,
  mediaCategory,
}) => {
  const [medias, setMedias] = useState<any[]>([]);
  // useEffect(() => {
  //   const getMedias = async () => {
  //     try {
  //       const { response, err } = await mediaApi.getList({
  //         mediaType,
  //         mediaCategory,
  //         page: 1,
  //       });

  //       if (response) {
  //         setMedias(response.results);
  //       }
  //       if (err) {
  //         toast.error(err.message);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching media list:", error);
  //     }
  //   };

  //   getMedias();
  // }, [mediaType, mediaCategory]);

  return (
    <>
      <AutoSwiper>
        {medias.map((media, index) => (
          <SwiperSlide key={index}>
            <MovieItem media={media} mediaType={mediaType} />
          </SwiperSlide>
        ))}
      </AutoSwiper>
    </>
  );
};

export default MovieSlide;
