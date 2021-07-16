import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
const server = express();

console.log("from app.js", process.env.MONGODB_URL);

server.use(express.urlencoded({ limit: "1000mb", extended: true }));
server.use(express.json({ limit: "50mb" }));
server.use(helmet());
server.use(morgan("tiny"));
server.use(cors());

export default server;
