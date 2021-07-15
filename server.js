import mongoose from "mongoose";

import server from "./app.js";
import userRoutes from "./routes/users.js";

const PORT = process.env.PORT;

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

server.get("/", (req, res) => {
  res.send("Welcome to the danger zone");
});

server.use("/users", userRoutes);

mongoose.set("useFindAndModify", false);
