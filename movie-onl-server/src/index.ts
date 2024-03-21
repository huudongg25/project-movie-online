import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import createTable from "./entities/index.entity";
import sequelize from "./configs/db.config";
import Router from "./routers";
import handleError from "./middlewares/handleError.middleware";
dotenv.config();
//create server with express
const server = express();
//cookie
server.use(cookieParser());
//session
server.use(
  session({
    secret: "movie",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// ejs
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
//port
const port = process.env.PORT || 8000;
//body-parser
server.use(urlencoded());
//body-parser
server.use(bodyParser.json());
//database
sequelize.authenticate();
//socket
const app = http.createServer(server);
const io = new Server(app, {
  cors: {
    origin: "http://localhost:3000",
  },
});
// io.on("connection", (socket: Socket) => {
//   console.log(socket.id);
//   socket.on("blockUser", (userId: any) => {
//     console.log(userId);

//     io.emit("logout", userId);
//   });
//   socket.on("commentNew", (roomId: any) => {
//     console.log(roomId);
//     io.emit("comment", roomId);
//   });
//   socket.on("commentLike", (commentId: any) => {
//     console.log(commentId);
//     io.emit("like", commentId);
//   });
//   socket.on("commentDelete", (commentId: any) => {
//     console.log(commentId);
//     io.emit("delete", commentId);
//   });
// socket.on("disconnect", () => {
//   console.log("Client disconnected");
// });
// });
//
//connect client
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//route on url
Router(server);
//err
server.use(handleError);
//create entity table db
createTable();
//address server
app.listen(port, () => {
  console.log(`server on port ${port}`);
});
