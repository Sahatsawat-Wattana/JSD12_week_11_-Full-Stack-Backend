import { Router } from "express";
import { products } from "../../fakeData/fakeProducts.js";

export const router = Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id",(req,res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    res.status(404).json({ error: "Product not found!" });
  }
  res.json(product)
})

router.post("/", (req, res) => {
  const { name, price } = req.body || {};
  if (!name || !price) {
    return res.status(400).json({ error: "name and price are required" });
  }
  const nextId = String(
    products.reduce((max, p) => Math.max(max, Number(p.id)), 0 || 0) + 1,
  );
  const newProduct = { id: nextId, name, price };
  products.push(newProduct);
  return res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    res.status(404).json({ error: "Product not found!" });
  }
  const { name, price } = req.body || {};
  if (!name || !price) {
    return res.status(400).json({ error: "name and price are required" });
  }
  product.name = name;
  product.price = price;
  res.status(200).json(product);
});

router.delete("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    res.status(404).json({ error: "Product not found!" });
  }
  products.splice(Number(product.id) - 1, 1);
  res.status(200).json({ message: "Delete completed" });
});
