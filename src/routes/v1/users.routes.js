import { Router } from "express";
import { users } from "../../fakeData/fakeUsers.js";
import {
  createUserFakeData,
  deleteUserFakeData,
  getAllUsersFakedata,
  getOneUserFakeData,
  updateUserFakeData,
} from "../../modules/Users/users.v1.controller.js";

export const router = Router();

router.get("/", getAllUsersFakedata);

router.get("/:id", getOneUserFakeData);

router.post("/", createUserFakeData);

router.put("/:id", updateUserFakeData);

router.delete("/:id", deleteUserFakeData);
