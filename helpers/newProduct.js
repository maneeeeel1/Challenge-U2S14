const Product = require("../models/Product.js");
function newProduct(){
        const html = `  
        <h1>NUEVO PRODUCTO</h1>

         <form action="/dashboard" method="POST" enctype="multipart/form-data">
        <input type="text" name="nombre" placeholder="Nombre" required /><br/>
        <textarea name="descripcion" placeholder="Descripción"required></textarea><br/>
        <input type="number" name="precio" placeholder="Precio" required /><br/>
        <select name="categoria" required>
                <option value="Camisetas">Camisetas</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Zapatos">Zapatos</option>
                <option value="Accesorios">Accesorios</option>
        </select><br/>
        <select name="talla" required>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="Única">Única</option>
        </select><br/>
        <input type="file" name="image" accept="image/*" /><br/>
        <button type="submit">Crear Producto</button>
        </form>`;
    
        return html;
};

module.exports = newProduct;