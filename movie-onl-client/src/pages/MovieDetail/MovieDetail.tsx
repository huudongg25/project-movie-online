import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import CircularRate from "../../components/CircularRate/CircularRate";
import Container from "../../components/Container/Container";
import ImageHeader from "../../components/ImageHeader/ImageHeader";
import CastSlide from "../../components/CastSlide/CastSlide";
import MovieSlide from "../../components/MovieSlide/MovieSlide";
import MovieReview from "../../components/MovieReview/MovieReview";

const MovieDetail = () => {
  return (
    <>
      <ImageHeader />
      <Box
        sx={{
          color: "primary.contrastText",
        }}
      >
        {/* media content */}
        <Box
          sx={{
            marginTop: { xs: "-10rem", md: "-15rem", lg: "-20rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            {/* poster */}
            <Box
              sx={{
                width: { xs: "70%", sm: "50%", md: "40%" },
                margin: { xs: "0 auto 2rem", md: "0 2rem 0 0" },
              }}
            >
              <Box
                sx={{
                  paddingTop: "140%",
                }}
              />
            </Box>
            {/* poster */}

            {/* media info */}
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                color: "text.primary",
              }}
            >
              <Stack spacing={5}>
                {/* title */}
                <Typography
                  variant="h4"
                  fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                  fontWeight="700"
                >
                  tên phim
                </Typography>
                {/* rate and genres */}
                <Stack direction="row" spacing={1} alignItems="center">
                  <CircularRate />
                  <Divider orientation="vertical" />
                  <Chip variant="filled" color="primary" />
                </Stack>
                {/* rate and genres */}
                {/* overview */}
                <Typography variant="body1">overview</Typography>
                {/* buttons */}
                <Stack direction="row" spacing={1}>
                  <LoadingButton
                    variant="text"
                    sx={{
                      width: "max-content",
                      "& .MuiButon-starIcon": { marginRight: "0" },
                    }}
                    size="large"
                    startIcon={<FavoriteBorderOutlinedIcon />}
                    loadingPosition="start"
                  />
                  <Button
                    variant="contained"
                    sx={{ width: "max-content" }}
                    size="large"
                    startIcon={<PlayArrowIcon />}
                  >
                    watch now
                  </Button>
                </Stack>
                {/* cast */}
                <Container>
                  <CastSlide />
                </Container>
              </Stack>
            </Box>
          </Box>
        </Box>
        {/* media videos */}
        <div style={{ paddingTop: "2rem" }}>
          <Container>
            <MovieSlide />
          </Container>
        </div>
      </Box>
      {/* media reviews */}
      <MovieReview />
    </>
  );
};

export default MovieDetail;
