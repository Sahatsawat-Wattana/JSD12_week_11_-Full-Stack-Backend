import { Router } from "express";
import { supabase } from "../../config/supabase.js";
import {
  createUser,
  createUserSql,
  deleteUser,
  deleteUserSql,
  getAllUsers,
  getAllUsersSql,
  getOneUser,
  getOneUserSql,
  updateUser,
  UpdateUserSql,
} from "../../modules/Users/users.v2.controller.js";

export const router = Router();

router.get("/", getAllUsers);

router.get("/pg", getAllUsersSql);

router.get("/pg/:id", getOneUserSql);

router.get("/:id", getOneUser);

router.post("/", createUser);

router.put("/pg/:id", UpdateUserSql);

router.delete("/pg/:id", deleteUserSql);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/pg", createUserSql);
