import { users } from "../../fakeData/fakeUsers.js";

export const getAllUsersFakedata = (req, res, next) => {
  try {
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getOneUserFakeData = (req, res, next) => {
  try {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    return res.json(user);
  } catch (err) {
    next(err);
  }
};

export const createUserFakeData = (req, res, next) => {
  try {
    const { username, email } = req.body || {};
    if (!username || !email) {
      return res.status(400).json({ error: "username and email are required" });
    }
    const nextId = String(
      users.reduce((max, u) => Math.max(max, Number(u.id)), 0 || 0) + 1,
    );
    const newUser = { id: nextId, username, email };
    users.push(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export const updateUserFakeData = (req, res, next) => {
  try {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    const { username, email, password } = req.body || {};
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "username, email and password are required" });
    }
    user.username = username;
    user.email = email;
    user.password = password;
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUserFakeData = (req, res, next) => {
  try {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    users.splice(Number(user.id) - 1, 1);
    return res.status(200).json({ message: "Delete completed" });
  } catch (err) {
    next(err);
  }
};
