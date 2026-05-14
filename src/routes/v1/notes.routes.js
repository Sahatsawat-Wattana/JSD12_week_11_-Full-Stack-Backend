import { Router } from "express";
import { notes } from "../../fakeData/fakenotes.js";

export const router = Router();

router.get("/", (req, res) => {
  res.json(notes);
});

router.get("/:id", (req,res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) {
    res.status(404).json({ error: "note not found!" });
  }
  res.json(note)
})


router.post("/", (req, res) => {
  const { passage } = req.body || {};
  if (!passage) {
    return res.status(400).json({ error: "note are required" });
  }
  const nextId = String(
    notes.reduce((max, p) => Math.max(max, Number(p.id)), 0 || 0) + 1,
  );
  const newNotes = { id: nextId, passage };
  notes.push(newNotes);
  return res.status(201).json(newNotes);
});

router.put("/:id", (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) {
    res.status(404).json({ error: "note not found!" });
  }
  const { passage } = req.body || {};
  if (!passage) {
    return res.status(400).json({ error: "passage is required" });
  }
  note.passage = passage;
  res.status(200).json(note);
});

router.delete("/:id", (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) {
    res.status(404).json({ error: "note not found!" });
  }
  notes.splice(Number(note.id) - 1, 1);
  res.status(200).json({ message: "Delete completed" });
});
