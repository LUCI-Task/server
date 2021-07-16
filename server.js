import mongoose from "mongoose";
import dotenv from "dotenv";
import server from "./app.js";
import userRoutes from "./routes/users.js";

dotenv.config();
console.log("from server", process.env.MONGODB_URL);
const PORT = process.env.PORT || 5000;

const uri = process.env.MONGODB_URL;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(PORT, () =>
      console.log(`\n=== Server listening on port ${PORT} ===\n`)
    )
  )
  .catch((err) => console.log(err.message));

server.get("/", (req, res) => {
  res.send("Welcome to the danger zone");
});

server.use("/users", userRoutes);

mongoose.set("useFindAndModify", false);
