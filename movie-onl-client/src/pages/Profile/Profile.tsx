import React from "react";
import { AiFillEdit, AiOutlineCloudUpload } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { BsSave2 } from "react-icons/bs";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
const Profile = () => {
  return (
    <>
      <section className="profile">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container-middle">
          <Grid container spacing={2}>
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
                      src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
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
      </section>
    </>
  );
};

export default Profile;
