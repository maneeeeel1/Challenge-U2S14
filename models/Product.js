// Modelo del producto
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        type: String,
        required: true,
        trim: true
    },
    categoria:{
        type: String,
        enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"],
        required: true
    },
    talla:{
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "42", "43", "44", "45", "46", "Única"],
        required: true
    },
    precio:{
        type: Number,
        required: true,
        min: 0
    }

},{timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;