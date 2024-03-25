import React, { useState, useEffect } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  TextField,
  Box,
} from "@mui/material";
import "./Category.css";
import { getAllCategories, updateCategory, deleteCategory } from "../../api/category";
import { notifyError, notifySuccess } from "../../common/toatify";

const Category: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories("ASC", 7, 1, "");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleOpenModal = (category: { id: number; name: string }) => {
    setSelectedCategory(category);
    setNewCategoryName(category.name);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCategory(null);
    setNewCategoryName("");
  };

  const handleUpdateCategory = async () => {
    if (!selectedCategory) return;

    try {
      await updateCategory(selectedCategory.id, { name: newCategoryName });
      const response = await getAllCategories("ASC", 7, 1, "");
      setCategories(response.data);
      notifySuccess("Category updated successfully!");
      handleCloseModal();
    } catch (error) {
      console.error("Error updating category:", error);
      notifyError("Error updating category. Please try again later.");
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id);
      const response = await getAllCategories("ASC", 7, 1, "");
      setCategories(response.data);
      notifySuccess("Category deleted successfully!");
    } catch (error) {
      console.error("Error deleting category:", error);
      notifyError("Error deleting category. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Quản lý thể loại phim</h2>
      <hr style={{ margin: "20px 0" }} />
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
      >
        Tạo thể loại phim
      </Button>
      <TableContainer component={Paper}>
        <Table width="300px">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Thể loại</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category: any, index: number) => (
              <TableRow key={category.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Button
                    style={{ marginRight: "6px" }}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenModal(category)}
                  >
                    Sửa
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="modalContainer">
          <h2>Chỉnh sửa thể loại</h2>
          <TextField
            fullWidth
            id="newCategoryName"
            label="Tên thể loại"
            variant="outlined"
            margin="normal"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleUpdateCategory}>
            Lưu
          </Button>
          <span className="closeButton" onClick={handleCloseModal}>
            &times;
          </span>
        </Box>
      </Modal>
    </div>
  );
};

export default Category;
