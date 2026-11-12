import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  changeStock,
  deleteProduct,
  getStats,
} from "../controllers/productController.js";

const router = express.Router();

// keep /stats above /:id, otherwise express thinks "stats" is an id
router.get("/stats", getStats);

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
router.patch("/:id/stock", changeStock);

export default router;
