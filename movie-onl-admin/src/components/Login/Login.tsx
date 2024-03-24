import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../common/toatify";
import { ToastContainer } from "react-toastify";
import { loginAdmin } from "../../api/admin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      notifyError("Please enter all fields");
    } else {
      try {
        const response = await loginAdmin({ email, password });
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("idUser", JSON.stringify(response.data.id));
        navigate("/dashboard");
      } catch (error) {
        notifyError("User or Password incorrect");
      }
    }
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/dv9tkz5pa/image/upload/v1710513481/myImages/p2965q7qhm9a9ndwcfjj.jpg"})`,
      }}
    >
      <ToastContainer></ToastContainer>
      <div className="modal">
        <div className="login-tittle">
          <img
            className="logo-img"
            src="https://res.cloudinary.com/dv9tkz5pa/image/upload/v1710385308/myImages/ithn4rc3ei2l6bf6rwb1.png"
            alt="logo"
          />
          <h4>Đăng nhập admin</h4>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            className="Input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Mật khẩu"
            required
            className="Input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
