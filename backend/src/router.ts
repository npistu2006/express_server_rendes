import { Router } from "express";
import { addUser, deleteUser, getAll } from "./controller.js";
import { getUsers } from "./model.js";

const router = Router();

router.get("/users", getAll);
router.delete("/users/:id", deleteUser);
router.post("/users", addUser)

export default router