//Plantilla HTML para renderizar paginas admin
const Product = require("../models/Product.js");
function plantillaBaseAdmin(p){
        const html =`
            <div style="border: 1px solid grey; border-radius:30px; width: 200px; height:250px; text-align:center;">
                <img src="${p.imagen}" width="100" height="100"/><br>
                <p style="margin: 5px;">${p.nombre}</p><br>
                <a href="/dashboard/${p._id}" style="border: 1px solid black; border-radius: 10px; background-color:grey; margin:20px; text-decoration: none; color: white; padding: 5px;">👁️​</a>
                <a href="/dashboard/${p._id}/edit" style="border: 1px solid black; border-radius: 10px; background-color:grey; margin:20px; text-decoration: none; color: white; padding: 5px;">✏️​</a><br>
                <form method="POST" action="/dashboard/${p._id}/delete?_method=DELETE">
                    <button type="submit" style="border: 1px solid grey; border-radius:30px; margin:20px;">🗑️​</button>
                </form>
            </div>
        `;
    
        return html;
};

module.exports = plantillaBaseAdmin;