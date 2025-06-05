module.exports = {
    components:{
        schemas:{
            Producto:{
                type:'object',
                properties:{
                    _id:{
                        type:'string',
                        description:"ID del producto",
                        example:"6836e7e918754ac7d705b114"
                    },
                    nombre:{
                        type:'string',
                        description:"Nombre del producto",
                        example:"Camiseta Luigi Nintendo"
                    },
                    descripcion:{
                        type:'string',
                        description:"Descripción del producto",
                        example:"Camiseta verde de Luigi"
                    },
                    imagen:{
                        type:'string',
                        description:"URL imagen producto",
                        example:"https://res.cloudinary.com/dtu39yhqs/image/upload/v1748428777/tienda-ropa/l7bn79egvdfrlmhgml4u.jpg"
                    },
                    categoria:{
                        type:'string',
                        description:"Categoría del producto",
                        example:"Camiseta"
                    },
                    talla:{
                        type:'string',
                        description:"Talla del producto",
                        example:"M"
                    },
                    precio:{
                        type:'number',
                        description:"Precio del producto",
                        example:"15"
                    },
                }
            }
        }
    }
}
