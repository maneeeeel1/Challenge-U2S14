//Plantilla HTML para renderizar boton ver solo admins:
const Product = require("../models/Product.js");
function detailsAdmin(p){
        const html =`
        <article>
                <h3>${p.nombre}</h3>
                <img src="${p.imagen}" width="200" height="200"/><br>
                <p><b>Descripción:</b> ${p.descripcion}</p>
                <p><b>Precio:</b> ${p.precio}€</p>
                <p><b>Talla:</b> ${p.talla}</p>
                <p><b>Categoria:</b> ${p.categoria}</p><br>

                <a href="/dashboard/${p._id}/edit" style="border: 1px solid black; border-radius: 10px; background-color:grey; margin:20px; text-decoration: none; color: white; padding: 5px;">✏️​</a><br>

        </article>
        
        
        `;
    
        return html;
};

module.exports = detailsAdmin;