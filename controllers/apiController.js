const Product = require("../models/Product.js");


//Publicas
exports.getAllProducts = async (req,res) =>{
    try{
    const products = await Product.find();
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con productos" });
    };
};

exports.getAllCamisetas = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Camisetas" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Camisetas" });
    };
};

exports.getAllPantalones = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Pantalones" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Pantalones" });
    };
};

exports.getAllZapatos = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Zapatos" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Zapatos" });
    };
};

exports.getAllAccesorios = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Accesorios" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Accesorios" });
    };
};

exports.getProductDetail = async (req,res) =>{
    try{
    const product = await Product.findById(req.params.productId);
     return res.status(201).send(product);
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error con producto" });
    };
};

//Privadas
exports.getDashboard = async (req,res) =>{
    try{
    const products = await Product.find();
    return res.status(200).send(products);
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error con Dashboard" });
    };
};

exports.createProduct = async (req,res) =>{
    try{
        const { nombre, descripcion, categoria, talla, precio} = req.body;
        const imagen = req.file?.path;
        const newProduct = await Product.create({nombre, descripcion, categoria, talla, precio, imagen});
        return res.redirect(newProduct);
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error crear producto" });
    }
};

exports.getAllCamisetasAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Camisetas" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Camisetas" });
    };
};

exports.getAllPantalonesAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Pantalones" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Pantalones" });
    };
};

exports.getAllZapatosAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Zapatos" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Zapatos" });
    };
};

exports.getAllAccesoriosAdmin = async (req,res) =>{
    try{
    const products = await Product.find({ categoria: "Accesorios" });
     return res.status(201).send(products);
    }catch(err){
        console.error(err);
         return res.status(500).send({ message: "Error con Accesorios" });
    };
};

exports.getDashboardDetail = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.productId);
        return res.status(201).send(product);
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
        const updated = await Product.findByIdAndUpdate(req.params.productId, updateData);
        return res.redirect(updated);
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error actualizar producto" });
    }
};

exports.deleteProduct = async (req,res) =>{
    try{
        const deleted = await Product.findByIdAndDelete(req.params.productId);
        return res.redirect(deleted); 
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: "Error eliminar producto" }); 
    }
};
