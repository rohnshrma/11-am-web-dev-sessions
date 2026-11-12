import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

const sample = [
  { name: "Wireless Mouse", category: "Electronics", price: 499, quantity: 25, description: "2.4 GHz, USB receiver included" },
  { name: "Mechanical Keyboard", category: "Electronics", price: 2499, quantity: 8, description: "Blue switches, full size" },
  { name: "USB-C Cable", category: "Electronics", price: 199, quantity: 3, description: "1 metre, fast charging" },
  { name: "A4 Notebook", category: "Stationery", price: 60, quantity: 120, description: "200 pages, ruled" },
  { name: "Gel Pen (Blue)", category: "Stationery", price: 10, quantity: 0, description: "0.5 mm tip" },
  { name: "Basmati Rice 5kg", category: "Grocery", price: 650, quantity: 14, description: "" },
  { name: "Cotton T-Shirt", category: "Clothing", price: 349, quantity: 5, description: "Size M, navy blue" },
  { name: "Office Chair", category: "Furniture", price: 4999, quantity: 2, description: "Adjustable height, mesh back" },
];

const run = async () => {
  await connectDB();
  await Product.deleteMany();
  await Product.insertMany(sample);
  console.log(`Seeded ${sample.length} products`);
  await mongoose.disconnect();
};

run();
