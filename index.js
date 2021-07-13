import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";

const server = express();
dotenv.config();

server.use(express.urlencoded({ limit: "30mb", extended: true }));
server.use(express.json()); //parsing JSON
server.use(helmet());
server.use(morgan("tiny"));
server.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(PORT, () =>
      console.log(`\n=== Server listening on port ${PORT} ===\n`)
    )
  )
  .catch((err) => console.log(err.message));

server.use("/users", userRoutes);

mongoose.set("useFindAndModify", false);
