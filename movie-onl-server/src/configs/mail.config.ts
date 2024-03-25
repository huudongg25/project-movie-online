import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nikeshop298@gmail.com",
    pass: "deas anuk vicf jnua",
  },
});
export default transporter;
