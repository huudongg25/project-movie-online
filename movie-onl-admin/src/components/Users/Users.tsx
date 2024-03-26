import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import "./Users.css";
import { Modal as AntdModal } from "antd";
import { getAllUser, updateUser } from "../../api/user";
import { UserType } from "../../types/user.type";

interface User {
  id: number;
  email: string;
  password: string;
  address: string;
  birthDay: string;
  avatar: string;
  depositedAmount: number;
  status: number;
}

const Users: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUser("asc", rowsPerPage, page + 1, "");
        setUsers(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [page, rowsPerPage]);

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

  const handleBlockUser = (id: number) => {
    handleConfirmBlockUser(id);
  };

  const handleUnblockUser = async (id: number) => {
    try {
      await updateUser(id, { status: 1 });
      setUsers(
        users.map((user) => (user.id === id ? { ...user, status: 1 } : user))
      );
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  const handleConfirmBlockUser = (id: number) => {
    AntdModal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc chắn muốn block người dùng này?",
      onOk: () => blockUser(id),
      onCancel: () => console.log("Cancel"),
    });
  };

  const blockUser = async (id: number) => {
    try {
      await updateUser(id, { status: 2 });
      setUsers(
        users.map((user) => (user.id === id ? { ...user, status: 2 } : user))
      );
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };

  return (
    <div>
      <section className="content">
        <h2>Quản lí người dùng</h2>
        <hr style={{ margin: "20px 0" }} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>Monney</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user: UserType) => (
                <TableRow
                  key={user.id}
                  style={{
                    textDecoration: user.status === 2 ? "line-through" : "none",
                  }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="avatar-img">
                    <img src={user.avatar} alt="Avatar" />
                  </TableCell>
                  <TableCell>{user.depositedAmount}</TableCell>
                  <TableCell>
                    {user.status === 2 ? (
                      <Button
                        variant="outlined"
                        onClick={() => handleUnblockUser(Number(user.id))}
                      >
                        Unblock
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => handleBlockUser(Number(user.id))}
                      >
                        Block
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </section>
    </div>
  );
};

export default Users;
