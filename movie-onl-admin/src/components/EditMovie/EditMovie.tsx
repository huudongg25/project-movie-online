import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import "./EditMovie.css";

interface MovieData {
  title: string;
  category: string;
  genre: string;
  summary: string;
  image: string;
  videoLink: string;
}

const EditMovie = () => {
  return (
    <div>
      <h2>Sửa phim</h2>
      <hr style={{ margin: "20px 0" }} />
      <div className="edit-movie-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <h3>Tên phim</h3>
              <TextField fullWidth name="title" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Danh mục</h3>
              <TextField fullWidth name="category" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Thể loại</h3>
              <TextField fullWidth name="genre" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Nội dung phim</h3>
              <TextField fullWidth multiline rows={4} name="summary" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Link ảnh</h3>
              <TextField fullWidth name="image" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Link phim</h3>
              <TextField fullWidth name="videoLink" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Lưu phim
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditMovie;
