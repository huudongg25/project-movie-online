import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";

interface Media {
  id: number;
  media_type: any;
  release_date?: string;
  first_air_date?: string;
}

interface PersonMediaGridProps {
  personId: number;
}
const PersonMovieGrid: React.FC<PersonMediaGridProps> = ({ personId }) => {
  const [medias, setMedias] = useState<Media[]>([]);
  const [filteredMedias, setFilteredMedias] = useState<Media[]>([]);
  const [page, setPage] = useState<number>(1);
  const skip: number = 8;
  return (
    <>
      <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
        <Grid item xs={6} sm={4} md={3}>
          {/* <MovieItem /> */}
        </Grid>
      </Grid>
      {filteredMedias.length < medias.length && <Button>load more</Button>}
    </>
  );
};

export default PersonMovieGrid;
