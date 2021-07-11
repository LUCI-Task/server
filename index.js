import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import userRoutes from "./routes/users.js";

const server = express();

server.use("/users", userRoutes);

server.use(express.urlencoded({ limit: "30mb", extended: true }));
server.use(express.json()); //parsing JSON
server.use(helmet());
server.use(morgan("tiny"));
server.use(cors());

const MONGODB_URL =
  "mongodb+srv://lucidatabase:lucidatabase2021@cluster0.n6deg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3333;

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    server.listen(PORT, () =>
      console.log(`\n=== Server listening on port ${PORT} ===\n`)
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
