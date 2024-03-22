import React, { useState } from "react";
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
import "./Movies.css";
interface Movie {
  name: string;
  category: string;
  image: string;
  views: number;
  releaseDate: string;
}

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

const rows: Movie[] = [
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
  {
    name: "Gingerbread",
    category: "Category A",
    image: "image_url",
    views: 5000,
    releaseDate: "05/05/2022",
  },
];

const Movies: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const slicedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="content">
      <h2>Quản lí phim</h2>
      <hr style={{ margin: "20px 0" }} />
      <Link to="/create-movie">
        <Button className="add-movie" variant="outlined" color="inherit">
          Thêm phim mới
        </Button>
      </Link>
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
            {slicedRows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1 + page * rowsPerPage}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{row.image}</StyledTableCell>
                <StyledTableCell>{row.views}</StyledTableCell>
                <StyledTableCell>{row.releaseDate}</StyledTableCell>
                <StyledTableCell className="action-button">
                  <Button size="small" variant="contained">
                    Sửa
                  </Button>
                  <Button size="small" variant="contained" color="error">
                    Xóa
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Movies;
