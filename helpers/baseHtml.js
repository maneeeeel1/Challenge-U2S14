//Plantilla HTML para renderizar paginas publicas
const Product = require("../models/Product.js");
function plantillaBase(p){
        const html =`
             <div style="border: 1px solid grey;border-radius:30px; width: 200px; text-align:center;">
                    <img src="${p.imagen}" width="100" height="100"/><br>
                    <p style="margin: 5px">${p.nombre}</p><br>
                    <button style=" border: 1px solid black; border-radius: 10px; background-color:grey; margin:10px;">
                    <a href="/products/${p._id}" style="text-decoration: none; color: white; margin: 10px;">INFO</a>
                    </button>
            </div>
            `;
    return html;
};

module.exports = plantillaBase;
