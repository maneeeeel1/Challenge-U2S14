//Plantilla HTML para renderizar boton ver publico:
const Product = require("../models/Product.js");
function detailshtml(p){
        const html =`
        <article>
                <h3>${p.nombre}</h3>
                <img src="${p.imagen}" width="200" height="200"/><br>
                <p><b>Descripción:</b> ${p.descripcion}</p>
                <p><b>Precio:</b> ${p.precio}€</p>
                <p><b>Talla:</b> ${p.talla}</p>
                <p><b>Categoria:</b> ${p.categoria}</p>

        </article>`;
    
        return html;
};

module.exports = detailshtml;