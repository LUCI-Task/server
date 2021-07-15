import express from "express";

import { getUsers } from "../controllers/users.js";
import { createUser } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";
import { deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
