import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid } from "@mui/material";
import MovieItem from "../../components/MovieItem/MovieItem";
import Container from "../../components/Container/Container";

const FavoriteItem = () => {
  return (
    <>
      <MovieItem />
      <LoadingButton
        fullWidth
        variant="contained"
        sx={{ marginTop: 2 }}
        startIcon={<DeleteIcon />}
        loadingPosition="start"
      >
        remove
      </LoadingButton>
    </>
  );
};

const FavoriteList = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={1} sx={{ marginRight: "-8px!important" }}>
          <Grid item xs={6} sm={4} md={3}>
            <FavoriteItem />
          </Grid>
        </Grid>

        <Button>load more</Button>
      </Container>
    </Box>
  );
};

export default FavoriteList;
