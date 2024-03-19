import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const Order = () => {
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      createDate: "2024-03-14",
      status: "Đã thanh toán",
      paymentMethod: "COD",
      movie: "Tenet",
      price: 100000,
    },
    {
      id: 2,
      customerName: "Jane Smith",
      createDate: "2024-03-15",
      status: "Chưa thanh toán",
      paymentMethod: "Credit Card",
      movie: "Avengers: Endgame",
      price: 150000,
    },
    // Thêm các đơn hàng khác tương tự ở đây
  ];

  return (
    <div>
      <h2>Quản lý đơn hàng</h2>
      <hr style={{ margin: "20px 0" }} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã đơn hàng</TableCell>
              <TableCell>Họ và tên</TableCell>
              <TableCell>Ngày tạo</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Hình thức thanh toán</TableCell>
              <TableCell>Phim</TableCell>
              <TableCell>Giá tiền</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.createDate}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>{order.movie}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    Chi tiết
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Order;
