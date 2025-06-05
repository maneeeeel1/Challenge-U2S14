// Logica relacionada con producto
const Product = require("../models/Product.js");
const mongoose = require("mongoose");
const templateHtml =require("../helpers/template.js");
const templateHtmlAdmin =require("../helpers/templateAdmin.js");
const plantillaBaseAdmin = require("../helpers/baseHtmlAdmin.js");
const plantillaBase = require("../helpers/baseHtml.js");
const detailshtml = require("../helpers/detailsHtml.js");
const detailsAdmin = require("../helpers/detailsAdmin.js");
const newProduct =require("../helpers/newProduct.js");
const editProduct =require("../helpers/editHtml.js");


//Publicas
exports.getAllProducts = async (req,res) =>{
    try{
    const products = await Product.find();
        let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>PRODUCTOS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBase(p);
    });
     return res.status(201).send(templateHtml(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con productos" });
    };
};

exports.getAllCamisetas = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Camisetas" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>CAMISETAS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBase(p);
    });
     return res.status(201).send(templateHtml(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Camisetas" });
    };
};

exports.getAllPantalones = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Pantalones" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>PANTALONES:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBase(p);
    });
     return res.status(201).send(templateHtml(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Pantalones" });
    };
};

exports.getAllZapatos = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Zapatos" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>ZAPATOS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBase(p);
    });
     return res.status(201).send(templateHtml(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Zapatos" });
    };
};

exports.getAllAccesorios = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Accesorios" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>ACCESORIOS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBase(p);
    });
     return res.status(201).send(templateHtml(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Accesorios" });
    };
};

exports.getProductDetail = async (req,res) =>{
    try{
    const product = await Product.findById(req.params.productId);
    let html = detailshtml(product);
     return res.status(201).send(templateHtml(html));
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error con producto" });
    };
};

//Privadas
exports.getDashboard = async (req,res) =>{
    try{
    const products = await Product.find();
    let html ="<h1>Dashboard</h1><br>";
    products.forEach(p =>{
        html+= plantillaBaseAdmin(p);
    });
    return res.status(200).send(templateHtmlAdmin(html));
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error con Dashboard" });
    };
};

exports.getNewProduct=async(req,res)=>{
    try{
        const newForm = newProduct();
         return res.status(201).send(templateHtmlAdmin(newForm))
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error formulario nuevo" });
    };
};


exports.createProduct = async (req,res) =>{
    try{
        const { nombre, descripcion, categoria, talla, precio} = req.body;
        const imagen = req.file?.path;
        await Product.create({nombre, descripcion, categoria, talla, precio, imagen});
        return res.redirect("/dashboard");
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error crear producto" });
    }
};

exports.getAllCamisetasAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Camisetas" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>CAMISETAS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBaseAdmin(p);
    });
     return res.status(201).send(templateHtmlAdmin(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Camisetas" });
    };
};

exports.getAllPantalonesAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Pantalones" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>PANTALONES:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBaseAdmin(p);
    });
     return res.status(201).send(templateHtmlAdmin(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Pantalones" });
    };
};

exports.getAllZapatosAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Zapatos" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>ZAPATOS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBaseAdmin(p);
    });
     return res.status(201).send(templateHtmlAdmin(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Zapatos" });
    };
};

exports.getAllAccesoriosAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Accesorios" });
    let html ='<div style="border-radius: 30px; padding: 20px; color: white; background-color: black; display: flex; align-items:center ; text-decoration: underline; "><h1>ACCESORIOS:</h1></div>';
    products.forEach(p =>{
        html+= plantillaBaseAdmin(p);
    });
     return res.status(201).send(templateHtmlAdmin(html));
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Accesorios" });
    };
};

exports.getDashboardDetail = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.productId);
        let html = detailsAdmin(product);
            return res.status(201).send(templateHtmlAdmin(html));
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error mostrar detalle producto" });
    };
};

exports.updateProduct = async (req,res) =>{
    try{
        const { nombre, descripcion, categoria, talla, precio} = req.body;
        const imagen = req.file?.path;

        const updateData = { nombre, descripcion, categoria, talla, precio };
        if(imagen) updateData.imagen = imagen;
        await Product.findByIdAndUpdate(req.params.productId, updateData);
        return res.redirect("/dashboard");
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error actualizar producto" });
    }
};

exports.getEditForm = async (req, res) => {
    try{
        const product = await Product.findById(req.params.productId);
        const formHtml = editProduct(product);
        return res.status(200).send(templateHtmlAdmin(formHtml));
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error formulario de editar" });
    }
};

exports.deleteProduct = async (req,res) =>{
    try{
        await Product.findByIdAndDelete(req.params.productId);
        return res.redirect("/dashboard"); 
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error eliminar producto" }); 
    }
};