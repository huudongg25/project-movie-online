import React from "react";
import { AiFillEdit, AiOutlineCloudUpload } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { BsSave2 } from "react-icons/bs";
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
        {/* Same as */}
        <ToastContainer />
        <div className="container-middle">
          <div className="wrapper-profile">
            <h2 className="title-h2-profile">Account Setting</h2>
            <div className="content">
              <div className="content-left">
                <div className="wrapper-content-left">
                  <div className="user-infor">
                    <h3 className="title-h3-profile">User Information</h3>
                  </div>
                  <div className="user-infor">
                    <h3 className="title-h3-profile">Email</h3>
                    <div>
                      <input
                        className="change-input"
                        type="email"
                        name="email"
                        readOnly
                      />
                      <button className="btn btn-edit"></button>
                    </div>
                  </div>
                  <div className="user-infor">
                    <h3 className="title-h3-profile">Name</h3>
                    <div>
                      <input type="text" name="name" />
                      <button className="btn btn-edit">
                        <BsSave2 /> : <AiFillEdit />
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-delete">Delete Account</button>
                </div>
              </div>
              <div className="content-right">
                <div className="wrapper-content-right">
                  <h3 className="title-h3-profile">Profile Photo</h3>
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
                        <p>Upload</p>
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="images"
                        style={{ display: "none" }}
                      />
                      <button className="btn btn-upload"> Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
