import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  TablePagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField, // Import TextField
} from "@mui/material";
import { getAllMovies, deleteMovie } from "../../api/movie";
import { getAllCategories } from "../../api/category";
import "./Movies.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Movie {
  id: number;
  name: string;
  categoryId: number;
  director: string;
  price: number;
  video: string;
  totalViews: number;
  manufactureYear: string;
}

interface Category {
  id: number;
  name: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [movieIdToDelete, setMovieIdToDelete] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await getAllMovies(
          "ASC",
          rowsPerPage,
          page + 1,
          searchTerm
        );
        const categoryResponse = await getAllCategories("ASC", 7, 1, "");

        setMovies(movieResponse.data);
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, rowsPerPage, searchTerm]);

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(
      (categoryName) => categoryName.id === categoryId
    );
    return category ? category.name : "";
  };

  const handleDeleteMovie = async (id: number) => {
    setMovieIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteMovie = async () => {
    if (movieIdToDelete !== null) {
      try {
        await deleteMovie(movieIdToDelete);
        setMovies(movies.filter((movie) => movie.id !== movieIdToDelete));
      } catch (error) {
        console.error("Error deleting movie:", error);
      } finally {
        setDeleteDialogOpen(false);
        setMovieIdToDelete(null);
      }
    }
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setMovieIdToDelete(null);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="movie-management">
      <h2>Quản lý phim</h2>
      <hr style={{ margin: "20px 0" }} />
      <Link to="/create-movie">
        <div className="add-new-movie">
          <Button variant="outlined" color="inherit">
            Thêm phim mới
          </Button>
        </div>
      </Link>
      <div className="search-container">
        <TextField
        className="search-input"
          label="Tìm kiếm "
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên phim</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>Link phim</TableCell>
              <TableCell>Năm phát hành</TableCell>
              <TableCell>Đạo diễn</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie, index) => (
              <TableRow key={movie.id}>
                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{movie.name}</TableCell>
                <TableCell>{getCategoryName(movie.categoryId)}</TableCell>
                <TableCell>{movie.video}</TableCell>
                <TableCell>{movie.manufactureYear}</TableCell>
                <TableCell>{movie.director}</TableCell>
                <TableCell>{movie.price}$</TableCell>
                <TableCell className="action-button">
                  <div className="action-button">
                    <Link to={`/edit-movie/${movie.id}`}>
                      <FaEdit className="edit-btn" />
                    </Link>
                    <button onClick={() => handleDeleteMovie(movie.id)}>
                      <MdDelete className="delete-btn" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={movies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xóa phim này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Hủy</Button>
          <Button onClick={confirmDeleteMovie} autoFocus>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Movies;
