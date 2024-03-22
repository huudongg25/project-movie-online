import React from "react";
import { MediaGridProps } from "../../types/type";
import { Grid } from "@mui/material";
import MovieItem from "../MovieItem/MovieItem";

const MovieGrid: React.FC<MediaGridProps> = ({ medias, mediaType }) => {
  return (
    <>
      <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
        {medias.map((media, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <MovieItem media={media} mediaType={mediaType} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MovieGrid;
