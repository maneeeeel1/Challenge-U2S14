const Product = require("../models/Product.js");
function editProduct(p){
        const html =`     
        <h1>Editar Producto:</h1>
        <form action="/dashboard/${p._id}?_method=PUT" method="POST" enctype="multipart/form-data">
            <input type="text" name="nombre" value="${p.nombre}" required /><br/>
            <textarea name="descripcion" required>${p.descripcion}</textarea><br/>
            <input type="number" name="precio" value="${p.precio}" required /><br/>
            <select name="categoria" required>
                <option value="Camisetas" ${p.categoria === 'Camisetas' ? 'selected' : ''}>Camisetas</option>
                <option value="Pantalones" ${p.categoria === 'Pantalones' ? 'selected' : ''}>Pantalones</option>
                <option value="Zapatos" ${p.categoria === 'Zapatos' ? 'selected' : ''}>Zapatos</option>
                <option value="Accesorios" ${p.categoria === 'Accesorios' ? 'selected' : ''}>Accesorios</option>
            </select><br/>
            <select name="talla" required>
                <option value="XS" ${p.talla === 'XS' ? 'selected' : ''}>XS</option>
                <option value="S" ${p.talla === 'S' ? 'selected' : ''}>S</option>
                <option value="M" ${p.talla === 'M' ? 'selected' : ''}>M</option>
                <option value="L" ${p.talla === 'L' ? 'selected' : ''}>L</option>
                <option value="XL" ${p.talla === 'XL' ? 'selected' : ''}>XL</option>
                <option value="42" ${p.talla === '42' ? 'selected' : ''}>42</option>
                <option value="43" ${p.talla === '43' ? 'selected' : ''}>43</option>
                <option value="44" ${p.talla === '44' ? 'selected' : ''}>44</option>
                <option value="45" ${p.talla === '45' ? 'selected' : ''}>45</option>
                <option value="46" ${p.talla === '46' ? 'selected' : ''}>46</option>
                <option value="Única" ${p.talla === 'Única' ? 'selected' : ''}>Única</option>
            </select><br/>
            <input type="file" name="image" accept="image/*" /><br/>
            <button type="submit">Actualizar</button>
        </form>`;
    
        return html;
};

module.exports = editProduct;