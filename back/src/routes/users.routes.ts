import { Router } from "express";
import {
  createUserController,
  deletUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controllers";

const userRoutes: Router = Router();

userRoutes.post("/users", createUserController);
userRoutes.get("/users", getUserController);
userRoutes.patch("/users/:id", updateUserController);
userRoutes.delete("/users/:id", deletUserController);

export default userRoutes;
