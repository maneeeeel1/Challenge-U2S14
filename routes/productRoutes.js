// Define rutas del producto
const express=require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/productController.js");
const upload = require("../middlewares/cloudinaryMiddleware.js");
const auth = require("../middlewares/authMiddleware.js");

//PUBLICAS
router.get("/products", productController.getAllProducts);

router.get("/camisetas", productController.getAllCamisetas);
router.get("/pantalones", productController.getAllPantalones);
router.get("/zapatos", productController.getAllZapatos);
router.get("/accesorios", productController.getAllAccesorios);

router.get("/products/:productId", productController.getProductDetail);

//PRIVADAS
router.post("/dashboard", auth, upload.single("image"), productController.createProduct);

router.get("/dashboard", auth, productController.getDashboard);

router.get("/dashboard/new", auth, productController.getNewProduct);

router.get("/dashboard/camisetas", productController.getAllCamisetasAdmin);
router.get("/dashboard/pantalones", productController.getAllPantalonesAdmin);
router.get("/dashboard/zapatos", productController.getAllZapatosAdmin);
router.get("/dashboard/accesorios", productController.getAllAccesoriosAdmin);

router.get("/dashboard/:productId", auth, productController.getDashboardDetail);

router.get("/dashboard/:productId/edit", auth, productController.getEditForm);

router.put("/dashboard/:productId", auth, upload.single("image"), productController.updateProduct);

router.delete("/dashboard/:productId/delete", auth, productController.deleteProduct);

module.exports=router;