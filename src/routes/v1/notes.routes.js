import { Router } from "express";
import { notes } from "../../fakeData/fakenotes.js";

export const router = Router();

router.get("/", (req, res) => {
  res.json(notes);
});

router.post("/", (req, res) => {
  const { note } = req.body || {};
  if (!note) {
    return res.status(400).json({ error: "name and price are required" });
  }
  const nextId = String(
    notes.reduce((max, n) => Math.max(max, Number(n.id)), 0 || 0) + 1,
  );
  const newNotes = { id: nextId, note };
  notes.push(newNotes);
  return res.status(201).json(newNotes);
});

router.put("/:id", (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) {
    res.status(404).json({ error: "User not found!" });
  }
  const { note } = req.body || {};
  if (!note) {
    return res.status(400).json({ error: "name and price are required" });
  }
  notes.note = note
  res.status(200).json(note);
});

router.delete("/:id", (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) {
    res.status(404).json({ error: "User not found!" });
  }
  notes.splice(Number(note.id) - 1, 1);
  res.status(200).json({ message: "Delete completed" });
});