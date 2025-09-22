import { Router } from "express";
import { addUser, deleteUser, getAll, selectUser, updateFullUser, updateUser } from "./controller.js";
import { getUsers } from "./model.js";

const router = Router();

router.get("/users", getAll);
router.get("/users/:id", selectUser)
router.delete("/users/:id", deleteUser);
router.post("/users", addUser);
router.patch("/users/:id", updateUser);
router.put("/users/:id", updateFullUser)

export default router;