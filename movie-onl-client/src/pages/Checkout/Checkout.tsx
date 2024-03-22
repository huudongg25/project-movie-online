import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import "./Checkout.css";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AiFillEdit, AiOutlineCloudUpload } from "react-icons/ai";
import { BsSave2 } from "react-icons/bs";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: "20px" }}>
              <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
                Account Setting
              </Typography>
              <div className="user-info">
                <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
                  User Information
                </Typography>
                <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
                  Email
                </Typography>
                <div>
                  <TextField
                    className="change-input"
                    type="email"
                    name="email"
                    fullWidth
                    variant="outlined"
                    disabled
                  />
                  <IconButton className="btn btn-edit">
                    <AiFillEdit />
                  </IconButton>
                </div>
                <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
                  Name
                </Typography>
                <div>
                  <TextField
                    type="text"
                    name="name"
                    fullWidth
                    variant="outlined"
                  />
                  <IconButton className="btn btn-edit">
                    <BsSave2 />
                  </IconButton>
                </div>
                <Button className="btn btn-delete" variant="contained">
                  Delete Account
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: "20px" }}>
              <Typography variant="h3" gutterBottom>
                Profile Photo
              </Typography>
              <div className="content-photo">
                <div className="avatar-profile">
                  <img
                    src="https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809317niNpzY2khA3tzMg.jpg"
                    alt=""
                  />
                </div>
                <div className="action-upload">
                  <label htmlFor="file" className="btn btn-upload">
                    <AiOutlineCloudUpload className="icon-upload" />
                    <Typography>Upload</Typography>
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="images"
                    style={{ display: "none" }}
                  />
                  <Button className="btn btn-upload" variant="contained">
                    Save
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Checkout;
