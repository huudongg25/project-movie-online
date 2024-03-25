import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, MenuItem, Select } from "@mui/material";
import { createMovie } from "../../api/movie";
import { useNavigate } from "react-router-dom";
import "./CreateMovie.css";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../../common/toatify";
import { getAllCategories } from "../../api/category";
import { MovieType } from "../../types/movie.type";

const CreateMovie = () => {
  const [movieData, setMovieData] = useState<MovieType>({
    name: "",
    director: "",
    performer: "",
    categoryId: 1,
    manufactureYear: "",
    describe: "",
    video: "",
    price: 0,
    datePublication: "",
    movieDuration: "",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories("ASC", 7, 1, "");
        setCategories(categoriesData.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleCreateMovie = async () => {
    if (
      !movieData.name ||
      !movieData.director ||
      !movieData.performer ||
      !movieData.categoryId ||
      !movieData.manufactureYear ||
      !movieData.describe ||
      !movieData.video ||
      !movieData.price ||
      !movieData.datePublication ||
      !movieData.movieDuration
    ) {
      notifyError("Please fill in all fields.");
      return;
    }

    try {
      const response = await createMovie({
        ...movieData,
        categoryId: Number(movieData.categoryId),
      });
      notifySuccess("Movie created successfully!");
      setMovieData({
        name: "",
        director: "",
        performer: "",
        categoryId: 1,
        manufactureYear: "",
        describe: "",
        video: "",
        price: 0,
        datePublication: "",
        movieDuration: "",
      });
      navigate("/movies");
    } catch (error) {
      console.error("Error creating movie:", error);
      notifyError("Error create movie .");
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2>Tạo phim mới</h2>
      <hr style={{ margin: "20px 0" }} />
      <div className="create-movie-container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <h3>Tên phim</h3>
              <TextField
                fullWidth
                name="name"
                value={movieData.name}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Đạo diễn</h3>
              <TextField
                fullWidth
                name="director"
                value={movieData.director}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Diễn viên</h3>
              <TextField
                fullWidth
                name="performer"
                value={movieData.performer}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Danh mục</h3>
              <Select
                fullWidth
                name="categoryId"
                value={movieData.categoryId}
                onChange={handleChange}
                defaultValue={1}
              >
                {categories.map((category: any) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Năm sản xuất</h3>
              <TextField
                fullWidth
                name="manufactureYear"
                value={movieData.manufactureYear}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Link phim</h3>
              <TextField
                fullWidth
                name="video"
                value={movieData.video}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Mô tả</h3>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="describe"
                value={movieData.describe}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Giá</h3>
              <TextField
                fullWidth
                name="price"
                value={movieData.price}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Thời lượng phim</h3>
              <TextField
                fullWidth
                name="movieDuration"
                value={movieData.movieDuration}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h3>Ngày phát hành</h3>
              <TextField
                fullWidth
                name="datePublication"
                value={movieData.datePublication}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateMovie}
            >
              Tạo phim
            </Button>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
};

export default CreateMovie;
