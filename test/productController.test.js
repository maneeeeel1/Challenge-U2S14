// Verificar que el productController funciona ok
const express =require ("express");
const request = require("supertest");
const multer = require ("multer");
const { createProduct, getEditForm, updateProduct, deleteProduct } = require('../controllers/productController.js');
const Product = require("../models/Product.js");

jest.mock("../models/Product.js");


describe("POST /create", () =>{
    const app = express();
    const upload = multer();
    app.use(express.urlencoded({ extended:true }));
    app.post("/create", upload.single("image"), createProduct);

    it("responde 302 y redirige al dashboard con el producto creado", async() =>{
        const body ={
            nombre: "Zapatos negros",
            descripcion: "Zapatos color negro",
            categoria: "Zapatos",
            talla: "43",
            precio: 60,
        };
        const mockImagePath = "gorra.jpg";

        Product.create.mockResolvedValue({
            _id: "123456789",
            ...body,
            imagen: mockImagePath,
        });

        const res = await request(app)
        .post("/create")
        .field("nombre", body.nombre)
        .field("descripcion", body.descripcion)
        .field("categoria", body.categoria)
        .field("talla", body.talla)
        .field("precio", body.precio)
        .attach("image", Buffer.from("fake img content"), "gorra.jpg");

        expect(res.status).toBe(302);
        expect(res.headers.location).toBe("/dashboard");
    })
});

describe("GET /edit", () =>{
    const app = express();
    const upload = multer();
    app.use(express.urlencoded({ extended:true }));
    app.get("/dashboard/:productId/edit", getEditForm);

    it("responde 200 y devuelve formulario para editar", async() =>{
        const mockProduct ={
            _id: "987654321",
            nombre: "Pantalón Lila",
            descripcion: "Pantalón lila Waluigi.",
            categoria: "Pantalones",
            talla: "M",
            precio: 30,
            imagen: "pantalonlila.jpg"
        };

        Product.findById.mockResolvedValue(mockProduct);

        const res = await request(app).get("/dashboard/987654321/edit");

        expect(res.status).toBe(200);
        expect(res.text).toContain("Pantalón Lila");
    })
});

describe("PUT /dashboard/:productId", () =>{
    const app = express();
    const upload = multer();
    app.use(express.urlencoded({ extended:true }));
    app.put("/dashboard/:productId", upload.single("image"), updateProduct);

    it("actualiza producto y rediriga a dashboard", async() =>{

        const productId = "987654321";

        const updated ={
            nombre: "Pantalón Rosa",
            descripcion: "Pantalón rosa Peach.",
            categoria: "Pantalones",
            talla: "M",
            precio: 30
        };

        Product.findByIdAndUpdate.mockResolvedValue({
            _id: productId,
            ...updated,
            imagen: "pantalonrosa.jpg"
        
        
        });

        const res = await request(app)
        .put(`/dashboard/${productId}`)
        .field("nombre", updated.nombre)
        .field("descripcion", updated.descripcion)
        .field("categoria", updated.categoria)
        .field("talla", updated.talla)
        .field("precio", updated.precio)
        .attach("image", Buffer.from("fake img content"), "pantalonrosa.jpg");

        expect(res.status).toBe(302);
        expect(res.headers.location).toBe("/dashboard");
    })
});
describe("DELETE /dashboard/:productId/delete", () =>{
    const app = express();
    app.use(express.urlencoded({ extended:true }));
    app.delete("/dashboard/:productId/delete", deleteProduct);

    it("elimina, responde 302 y redirige dashboard", async() =>{
        const mockProduct ={
            _id: "987654321",
            nombre: "Pantalón Lila",
            descripcion: "Pantalón lila Waluigi.",
            categoria: "Pantalones",
            talla: "M",
            precio: 30,
            imagen: "pantalonlila.jpg"
        };

        Product.findByIdAndDelete.mockResolvedValue(mockProduct);

        const res = await request(app).delete("/dashboard/987654321/delete");

        expect(res.status).toBe(302);
        expect(res.headers.location).toBe("/dashboard");
    })
});
