import mongoose from "mongoose";
import Product, { CATEGORIES } from "../models/Product.js";

const LOW_STOCK_LIMIT = 5;

const invalidId = (id) => !mongoose.isValidObjectId(id);

const categoryMessage = `Category must be one of: ${CATEGORIES.join(", ")}`;

// GET /api/products?search=mouse&category=Electronics
export const getProducts = async (req, res) => {
  try {
    const { search, category } = req.query;
    const filter = {};

    if (search) filter.name = { $regex: search, $options: "i" };
    if (category) filter.category = category;

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    if (invalidId(req.params.id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, quantity, description } = req.body;

    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!CATEGORIES.includes(category)) {
      return res.status(400).json({ message: categoryMessage });
    }
    if (!(Number(price) > 0)) {
      return res.status(400).json({ message: "Price must be more than 0" });
    }
    if (quantity === undefined || quantity === "" || !(Number(quantity) >= 0)) {
      return res.status(400).json({ message: "Quantity cannot be negative" });
    }

    const product = await Product.create({
      name,
      category,
      price: Number(price),
      quantity: Number(quantity),
      description,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    if (invalidId(req.params.id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const { name, category, price, quantity, description } = req.body;

    if (name !== undefined && !String(name).trim()) {
      return res.status(400).json({ message: "Name cannot be empty" });
    }
    if (category !== undefined && !CATEGORIES.includes(category)) {
      return res.status(400).json({ message: categoryMessage });
    }
    if (price !== undefined && !(Number(price) > 0)) {
      return res.status(400).json({ message: "Price must be more than 0" });
    }
    if (quantity !== undefined && !(Number(quantity) >= 0)) {
      return res.status(400).json({ message: "Quantity cannot be negative" });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, category, price, quantity, description },
      { new: true, runValidators: true },
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PATCH /api/products/:id/stock    body: { "change": 1 } or { "change": -1 }
export const changeStock = async (req, res) => {
  try {
    if (invalidId(req.params.id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const change = Number(req.body.change);
    if (!Number.isInteger(change) || change === 0) {
      return res
        .status(400)
        .json({ message: "change must be a non-zero whole number" });
    }

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.quantity + change < 0) {
      return res.status(400).json({ message: "Stock cannot go below 0" });
    }

    product.quantity += change;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    if (invalidId(req.params.id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted", id: product._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/products/stats
export const getStats = async (req, res) => {
  try {
    const products = await Product.find();

    const totalProducts = products.length;
    const totalUnits = products.reduce((sum, p) => sum + p.quantity, 0);
    const totalValue = products.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0,
    );
    const lowStock = products.filter(
      (p) => p.quantity > 0 && p.quantity <= LOW_STOCK_LIMIT,
    ).length;
    const outOfStock = products.filter((p) => p.quantity === 0).length;

    res.json({ totalProducts, totalUnits, totalValue, lowStock, outOfStock });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
