import React from "react";
import HeroSlide from "../../components/HeroSlide/HeroSlide";
import { Box, Button, Stack, Typography } from "@mui/material";
import uiConfigs from "./../../configs/UI.config";
import tmdbConfigs from "../../configs/tmdb.config";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { LoadingButton } from "@mui/lab";

const MovieList = () => {
  return (
    <div></div>
    // <>
    //   <HeroSlide
    //     mediaType={mediaType}
    //     mediaCategory={mediaCategories[currCategory]}
    //   />
    //   <Box sx={{ ...uiConfigs.style.mainContent }}>
    //     <Stack
    //       spacing={2}
    //       direction={{ xs: "column", md: "row" }}
    //       alignItems="center"
    //       justifyContent="space-between"
    //       sx={{ marginBottom: 4 }}
    //     >
    //       <Typography fontWeight="700" variant="h5">
    //         {mediaType === tmdbConfigs.mediaType.movie ? "Movies" : "TV Series"}
    //       </Typography>
    //       <Stack direction="row" spacing={2}>
    //         {category.map((cate, index) => (
    //           <Button
    //             key={index}
    //             size="large"
    //             variant={currCategory === index ? "contained" : "text"}
    //             sx={{
    //               color:
    //                 currCategory === index
    //                   ? "primary.contrastText"
    //                   : "text.primary",
    //             }}
    //             onClick={() => onCategoryChange(index)}
    //           >
    //             {cate}
    //           </Button>
    //         ))}
    //       </Stack>
    //     </Stack>
    //     <MovieGrid medias={medias} mediaType={mediaType} />
    //     <LoadingButton
    //       sx={{ marginTop: 8 }}
    //       fullWidth
    //       color="primary"
    //       loading={mediaLoading}
    //       onClick={onLoadMore}
    //     >
    //       load more
    //     </LoadingButton>
    //   </Box>
    // </>
  );
};

export default MovieList;
