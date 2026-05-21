import { Router } from "express";
import { supabase } from "../../config/supabase.js";
import {
  checkUserSession,
  createUser,
  createUserSql,
  deleteUser,
  deleteUserSql,
  getAllUsers,
  getAllUsersSql,
  getOneUser,
  getOneUserSql,
  login,
  logout,
  register,
  updateUser,
  UpdateUserSql,
} from "../../modules/Users/users.v2.controller.js";
import { authUser } from "../../middleware/auth.js";

export const router = Router();

router.get("/", getAllUsers);

router.get("/pg", getAllUsersSql);

router.get("/pg/:id", getOneUserSql);

router.get("/auth/me", authUser, checkUserSession);

router.get("/:id", getOneUser);

router.post("/", createUser);

router.post("/register",register);

router.post("/login",login);

router.post("/auth/logout",logout)

router.put("/pg/:id", UpdateUserSql);

router.delete("/pg/:id", deleteUserSql);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/pg", createUserSql);
