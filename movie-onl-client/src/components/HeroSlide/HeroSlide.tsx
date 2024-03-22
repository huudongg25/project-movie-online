import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import uiConfigs from "../../configs/UI.config";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../configs/tmdb.config";
import CircularRate from "../CircularRate/CircularRate";
import { routesPath } from "../../routes/Public.router";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../../redux/Loading";
import { toast } from "react-toastify";
import { GenreProps } from "../../types/type";

const HeroSlide: React.FC<{
  mediaType: string;
  mediaCategory: string;
}> = ({ mediaType, mediaCategory }) => {
  // const theme = useTheme();
  // const dispatch = useDispatch();

  // const [movies, setMovies] = useState<any[]>([]);
  // const [genres, setGenres] = useState<GenreProps[]>([]);

  // useEffect(() => {
  //   const getMedias = async () => {
  //     try {
  //       const { response, err } = await mediaApi.getList({
  //         mediaType,
  //         mediaCategory,
  //         page: 1,
  //       });

  //       if (response) {
  //         setMovies(response.results);
  //       }
  //       if (err) {
  //         toast.error(err.message);
  //       }
  //       dispatch(setGlobalLoading(false));
  //     } catch (error) {
  //       console.error("Error fetching media list:", error);
  //     }
  //   };

  //   const getGenres = async () => {
  //     dispatch(setGlobalLoading(true));
  //     try {
  //       const { response, err } = await genreApi.getList({ mediaType });

  //       if (response) {
  //         setGenres(response.genres);
  //         getMedias();
  //       }
  //       if (err) {
  //         toast.error(err.message);
  //         dispatch(setGlobalLoading(false));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching genre list:", error);
  //     }
  //   };

  //   getGenres();
  // }, [mediaType, mediaCategory, dispatch]);
  return (
    <>
      {/* <Box
        sx={{
          position: "relative",
          color: "primary.contrastText",
          "&::before": {
            content: '""',
            width: "100%",
            height: "30%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
            ...uiConfigs.style.gradientBgImage[theme.palette.mode],
          },
        }}
      >
        <Swiper
          grabCursor={true}
          loop={true}
          style={{ width: "100%", height: "max-content" }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  paddingTop: {
                    xs: "130%",
                    sm: "80%",
                    md: "60%",
                    lg: "45%",
                  },
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundImage: `url(${tmdbConfigs.backdropPath(
                    movie.backdrop_path || movie.poster_path
                  )})`,
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  ...uiConfigs.style.horizontalGradientBgImage[
                    theme.palette.mode
                  ],
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  paddingX: { sm: "10px", md: "5rem", lg: "10rem" },
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingX: "30px",
                    color: "text.primary",
                    width: { sm: "unset", md: "30%", lg: "40%" },
                  }}
                >
                  <Stack spacing={4} direction="column">
                    <Typography
                      variant="h4"
                      fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                      fontWeight="700"
                      sx={{
                        ...uiConfigs.style.typoLines(2, "left"),
                      }}
                    >
                      {movie.title || movie.name}
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <CircularRate value={movie.vote_average} />

                      <Divider orientation="vertical" />
                      {[...movie.genre_ids]
                        .splice(0, 2)
                        .map((genreId, index) => (
                          <Chip
                            variant="filled"
                            color="primary"
                            key={index}
                            label={genres.find((e) => e.id === genreId)?.name}
                          />
                        ))}
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        ...uiConfigs.style.typoLines(3),
                      }}
                    >
                      {movie.overview}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      component={Link}
                      to={routesPath.mediaDetail(mediaType, movie.id)}
                      sx={{ width: "max-content" }}
                    >
                      watch now
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */}
    </>
  );
};

export default HeroSlide;
