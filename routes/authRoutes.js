//Rutas de autentificacion
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

router.get("/login", authController.getLoginForm);

router.post("/login", authController.login);

router.get("/logout", authController.logout);

module.exports = router;
