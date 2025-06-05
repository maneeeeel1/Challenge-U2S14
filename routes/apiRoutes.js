// Define rutas del producto
const express=require("express");
const router = express.Router();
const apiController = require("../controllers/apiController.js");
const upload = require("../middlewares/cloudinaryMiddleware.js");
const auth = require("../middlewares/authMiddleware.js");

//PUBLICAS
router.get("/products", apiController.getAllProducts);

router.get("/camisetas", apiController.getAllCamisetas);
router.get("/pantalones", apiController.getAllPantalones);
router.get("/zapatos", apiController.getAllZapatos);
router.get("/accesorios", apiController.getAllAccesorios);

router.get("/products/:productId", apiController.getProductDetail);

//PRIVADAS
router.post("/dashboard", auth, upload.single("image"), apiController.createProduct);

router.get("/dashboard", auth, apiController.getDashboard);

router.get("/dashboard/camisetas", apiController.getAllCamisetasAdmin);
router.get("/dashboard/pantalones", apiController.getAllPantalonesAdmin);
router.get("/dashboard/zapatos", apiController.getAllZapatosAdmin);
router.get("/dashboard/accesorios", apiController.getAllAccesoriosAdmin);

router.get("/dashboard/:productId", auth, apiController.getDashboardDetail);

router.put("/dashboard/:productId", auth, upload.single("image"), apiController.updateProduct);

router.delete("/dashboard/:productId/delete", auth, apiController.deleteProduct);

module.exports=router;