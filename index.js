//Punto de entrada de la app. Configura servidor, rutas, middleware...
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const dbConnection = require("./config/db.js");
const methodOverride = require("method-override");
const productRoutes = require("./routes/productRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const session = require("express-session");
const swagger = require ("swagger-ui-express");
const docs = require ("./docs/indexInfo.js")

app.use(session({
    secret: "holamundo",
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

app.use("/", authRoutes);

app.use("/", productRoutes);

app.use("/api", apiRoutes);

app.use ("/api-docs", swagger.serve, swagger.setup(docs));

dbConnection();

app.listen(PORT, () => console.log(`server listening http://localhost:${PORT}`));
