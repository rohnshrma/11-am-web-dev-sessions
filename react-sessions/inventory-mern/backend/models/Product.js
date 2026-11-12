import mongoose from "mongoose";

export const CATEGORIES = [
  "Electronics",
  "Stationery",
  "Grocery",
  "Clothing",
  "Furniture",
  "Other",
];

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, enum: CATEGORIES },
    price: { type: Number, required: true, min: 1 },
    quantity: { type: Number, required: true, min: 0, default: 0 },
    description: { type: String, default: "", trim: true },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
