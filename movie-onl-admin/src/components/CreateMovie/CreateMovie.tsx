import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import "./CreateMovie.css";

const CreateMovie = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    category: "",
    genre: "",
    summary: "",
    image: "",
    videoLink: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  return (
    <div>
      <h2>Tạo phim mới</h2>
      <hr style={{ margin: "20px 0" }} />
      <div className="create-movie-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <h3>Tên phim</h3>
              <TextField
                fullWidth
                name="title"
                value={movieData.title}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Danh mục</h3>
              <TextField
                fullWidth
                name="category"
                value={movieData.category}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Thể loại</h3>
              <TextField
                fullWidth
                name="genre"
                value={movieData.genre}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Nội dung phim</h3>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="summary"
                value={movieData.summary}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Ảnh phim</h3>
              <TextField
                fullWidth
                name="image"
                value={movieData.image}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Link phim</h3>
              <TextField
                fullWidth
                name="videoLink"
                value={movieData.videoLink}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Tạo phim
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CreateMovie;
