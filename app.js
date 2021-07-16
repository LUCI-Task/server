import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

require("dotenv").config();

const server = express();

server.use(express.urlencoded({ limit: "1000mb", extended: true }));
server.use(express.json({ limit: "50mb" }));
server.use(helmet());
server.use(morgan("tiny"));
server.use(cors());

export default server;
