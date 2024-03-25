import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";
import { getAllMovies, deleteMovie } from "../../api/movie";
import { getAllCategories } from "../../api/category";
import "./Movies.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal as AntdModal } from "antd";

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await getAllMovies(
          "ASC",
          rowsPerPage,
          page + 1,
          ""
        );
        const categoryResponse = await getAllCategories("ASC", 7, 1, "");

        setMovies(movieResponse.data);
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, rowsPerPage]);

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(
      (categoryName) => categoryName.id === categoryId
    );
    return category ? category.name : "";
  };

  const handleDeleteMovie = async (id: number) => {
    AntdModal.confirm({
      title: "Xác nhận xóa phim",
      content: "Bạn có chắc chắn muốn xóa phim này không?",
      onOk: async () => {
        try {
          await deleteMovie(id);
          setMovies(movies.filter((movie) => movie.id !== id));
        } catch (error) {
          console.error("Error deleting movie:", error);
        }
      },
      onCancel: () => {
        console.log("Cancel delete operation");
      },
    });
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

  return (
    <div className="movie-management">
      <h2>Quản lí phim</h2>
      <hr style={{ margin: "20px 0" }} />
      <Link to="/create-movie">
        <div className="add-new-movie">
          <Button variant="outlined" color="inherit">
            Thêm phim mới
          </Button>
        </div>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên phim</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>Link phim</TableCell>
              <TableCell>Lượt xem</TableCell>
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
                <TableCell>{movie.totalViews}</TableCell>
                <TableCell>{movie.manufactureYear}</TableCell>
                <TableCell>{movie.director}</TableCell>
                <TableCell>{movie.price}$</TableCell>
                <TableCell className="action-button">
                  <div className="action-button">
                    <Link to={`/edit-movie/${movie.id}`}>
                      <FaEdit  className="edit-btn"/>
                    </Link>
                    <button onClick={() => handleDeleteMovie(movie.id)}>
                      <MdDelete className="delete-btn"/>
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
    </div>
  );
};

export default Movies;
