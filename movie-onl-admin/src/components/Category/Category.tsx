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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import "./Category.css";
import {
  getAllCategories,
  updateCategory,
  deleteCategory,
  createCategory,
} from "../../api/category";
import { notifyError, notifySuccess } from "../../common/toatify";

interface CategoryType {
  id?: number;
  name?: string;
  describe?: string;
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [action, setAction] = useState<"edit" | "delete">("edit");
  const [openCreateModal, setOpenCreateModal] = useState(false);

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

  const handleOpenModal = (
    category: CategoryType | null = null,
    action: "edit" | "delete"
  ) => {
    setSelectedCategory(category);
    setNewCategoryName(category?.name || "");
    setNewCategoryDescription(category?.describe || "");
    setAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenCreateModal(false);
    setSelectedCategory(null);
    setNewCategoryName("");
    setNewCategoryDescription("");
  };

  const handleUpdateCategory = async () => {
    if (!selectedCategory) return;

    try {
      await updateCategory(selectedCategory.id!, {
        name: newCategoryName,
        describe: newCategoryDescription,
      });
      const response = await getAllCategories("ASC", 7, 1, "");
      setCategories(response.data);
      notifySuccess("Category updated successfully!");
      handleCloseModal();
    } catch (error) {
      console.error("Error updating category:", error);
      notifyError("Error updating category. Please try again later.");
    }
  };

  const handleCreateCategory = async () => {
    try {
      await createCategory({
        name: newCategoryName,
        describe: newCategoryDescription,
      });
      const response = await getAllCategories("ASC", 7, 1, "");
      setCategories(response.data);
      notifySuccess("Category created successfully!");
      handleCloseModal();
    } catch (error) {
      console.error("Error creating category:", error);
      notifyError("Error creating category. Please try again later.");
    }
  };

  const handleDeleteCategory = async (id: number) => {
    handleOpenModal({ id }, "delete");
  };

  const handleConfirmDelete = async () => {
    if (!selectedCategory || !selectedCategory.id) return;
    try {
      await deleteCategory(selectedCategory.id);
      const response = await getAllCategories("ASC", 7, 1, "");
      setCategories(response.data);
      notifySuccess("Category deleted successfully!");
    } catch (error) {
      console.error("Error deleting category:", error);
      notifyError("Error deleting category. Please try again later.");
    } finally {
      handleCloseModal();
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
        onClick={() => setOpenCreateModal(true)}
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
            {categories.map((category: CategoryType, index: number) => (
              <TableRow key={category.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Button
                    style={{ marginRight: "6px" }}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenModal(category, "edit")}
                  >
                    Sửa
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteCategory(category.id!)}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          {action === "edit" ? "Chỉnh sửa thể loại" : "Xác nhận xóa thể loại"}
        </DialogTitle>
        <DialogContent>
          {action === "edit" ? (
            <>
              <TextField
                fullWidth
                id="newCategoryName"
                label="Tên thể loại"
                variant="outlined"
                margin="normal"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <TextField
                fullWidth
                id="newCategoryDescription"
                label="Mô tả thể loại"
                variant="outlined"
                margin="normal"
                value={newCategoryDescription}
                onChange={(e) => setNewCategoryDescription(e.target.value)}
              />
            </>
          ) : (
            <p>Bạn có chắc chắn muốn xóa thể loại này không?</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Hủy</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={
              action === "edit" ? handleUpdateCategory : handleConfirmDelete
            }
          >
            {action === "edit" ? "Lưu" : "Xác nhận"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openCreateModal} onClose={handleCloseModal}>
        <DialogTitle>Tạo thể loại mới</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id="newCategoryName"
            label="Tên thể loại"
            variant="outlined"
            margin="normal"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <TextField
            fullWidth
            id="newCategoryDescription"
            label="Mô tả thể loại"
            variant="outlined"
            margin="normal"
            value={newCategoryDescription}
            onChange={(e) => setNewCategoryDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Hủy</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateCategory}
          >
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Category;
