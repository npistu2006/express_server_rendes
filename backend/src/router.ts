import { Router } from "express";
import { addUser, deleteUser, getAll, updateUser } from "./controller.js";
import { getUsers } from "./model.js";

const router = Router();

router.get("/users", getAll);
router.delete("/users/:id", deleteUser);
router.post("/users", addUser);
router.put("/users/:id", updateUser);

export default router;