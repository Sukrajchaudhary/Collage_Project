const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/auth.middleware");
const { upload } = require("../Middleware/multer.middleware");
const {
  createProduct,
  getAllProducts,
  getAllUsersProducts,
  deleteProduct,
  updateProduct,
  getProductByID
} = require("../Controllers/Product.controllers");
router
  .post(
    "/create-product",
    verifyJWT,
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
      {
        name: "images",
        maxCount: 4,
      },
    ]),
    createProduct
  )
  .get("/GetallProducts", getAllProducts)
  .get("/getUserProduct", verifyJWT, getAllUsersProducts)
  .delete("/deleteproduct/:id",deleteProduct)
  .patch("/updateProduct/:id",updateProduct)
  .get("/selectProduct/:id",getProductByID)
exports.router = router;
