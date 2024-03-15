import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
<<<<<<< HEAD
import "./Movies.css";
=======
import './Movies.css'
>>>>>>> 0bac1b2815a5c3d63c58099e558aa9e3f3e2003f

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    name: "Frozen yoghurt",
    category: "Category A",
    image: "image_url",
    views: 1000,
    releaseDate: "01/01/2022",
  },
  {
    name: "Ice cream sandwich",
    category: "Category B",
    image: "image_url",
    views: 2000,
    releaseDate: "02/02/2022",
  },
  {
    name: "Eclair",
    category: "Category A",
    image: "image_url",
    views: 3000,
    releaseDate: "03/03/2022",
  },
  {
    name: "Cupcake",
    category: "Category B",
    image: "image_url",
    views: 4000,
    releaseDate: "04/04/2022",
  },
  {
    name: "Gingerbread",
    category: "Category A",
    image: "image_url",
    views: 5000,
    releaseDate: "05/05/2022",
  },
];

const Movies = () => {
  return (
    <div className="content">
      <h2>Movies Management</h2>
      <hr style={{ margin: "20px 0" }} />
      <Button className="add-movie" variant="outlined" color="inherit">
        Thêm phim mới
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>STT</StyledTableCell>
              <StyledTableCell>Tên phim</StyledTableCell>
              <StyledTableCell>Danh mục</StyledTableCell>
              <StyledTableCell>Ảnh</StyledTableCell>
              <StyledTableCell>Lượt xem</StyledTableCell>
              <StyledTableCell>Ngày phát hành</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{row.image}</StyledTableCell>
                <StyledTableCell>{row.views}</StyledTableCell>
                <StyledTableCell>{row.releaseDate}</StyledTableCell>
                <StyledTableCell>
                  <Button variant="contained">Sửa</Button>
                  <Button variant="contained" color="error">
                    Xóa
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Movies;
