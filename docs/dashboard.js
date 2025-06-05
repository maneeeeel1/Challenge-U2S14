module.exports = {
  paths: {
    "/dashboard": {
      get: {
        tags: ["Dashboard"],
        description: "Lista de todos los productos (requiere login)",
        responses: {
          200: {
            description: "Lista de productos correcta",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Producto" }
                }
              }
            }
          },
          401: { description: "Error al iniciar sesión" },
          500: { description: "Error del servidor" }
        }
      },
      post: {
        tags: ["Dashboard"],
        description: "Crear un nuevo producto (requiere login)",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  nombre: { type: "string", example: "Camiseta Luigi" },
                  descripcion: { type: "string", example: "Camiseta verde logo Luigi" },
                  categoria: { type: "string", example: "Camisetas" },
                  talla: { type: "string", example: "M" },
                  precio: { type: "number", example: 15 },
                  imagen: { type: "string", format: "binary" }
                },
                required: ["nombre", "descripcion", "categoria", "talla", "precio", "imagen"]
              }
            }
          }
        },
        responses: {
          201: { description: "Producto creado correctamente" },
          401: { description: "Error al iniciar sesión" },
          500: { description: "Error del servidor" }
        }
      }
    },

    "/dashboard/new": {
      get: {
        tags: ["Dashboard"],
        summary: "Formulario nuevo producto",
        description: "Devuelve HTML para crear producto.",
        responses: {
          200: { description: "Formulario mostrado" },
          401: { description: "No autorizado" }
        }
      }
    },

    "/dashboard/camisetas": {
      get: {
        tags: ["Dashboard"],
        summary: "Obtener Camisetas (admin)",
        description: 'Obtiene productos con categoría "Camisetas".',
        responses: {
          200: {
            description: "Camisetas obtenidas correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Producto" }
                }
              }
            }
          },
          500: { description: "Error del servidor" }
        }
      }
    },

    "/dashboard/pantalones": {
      get: {
        tags: ["Dashboard"],
        summary: "Obtener Pantalones (admin)",
        description: 'Obtiene productos con categoría "Pantalones".',
        responses: {
          200: {
            description: "Pantalones obtenidos correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Producto" }
                }
              }
            }
          },
          500: { description: "Error del servidor" }
        }
      }
    },

    "/dashboard/zapatos": {
      get: {
        tags: ["Dashboard"],
        summary: "Obtener Zapatos (admin)",
        description: 'Obtiene productos con categoría "Zapatos".',
        responses: {
          200: {
            description: "Zapatos obtenidos correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Producto" }
                }
              }
            }
          },
          500: { description: "Error del servidor" }
        }
      }
    },

    "/dashboard/accesorios": {
      get: {
        tags: ["Dashboard"],
        summary: "Obtener Accesorios (admin)",
        description: 'Obtiene productos con categoría "Accesorios".',
        responses: {
          200: {
            description: "Accesorios obtenidos correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Producto" }
                }
              }
            }
          },
          500: { description: "Error del servidor" }
        }
      }
    },

    "/dashboard/{productId}": {
      get: {
        tags: ["Dashboard"],
        summary: "Detalle del producto",
        description: "Devuelve los detalles de un producto específico",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            description: "Detalles del producto",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Producto" }
              }
            }
          },
          401: { description: "No autorizado" },
          404: { description: "Producto no encontrado" }
        }
      },

      put: {
        tags: ["Dashboard"],
        summary: "Actualizar producto",
        description: "Actualiza un producto existente (requiere autenticación e imagen opcional)",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  nombre: { type: "string" },
                  descripcion: { type: "string" },
                  categoria: { type: "string" },
                  talla: { type: "string" },
                  precio: { type: "number" },
                  image: { type: "string", format: "binary" }
                }
              }
            }
          }
        },
        responses: {
          200: { description: "Producto actualizado correctamente" },
          401: { description: "No autorizado" },
          404: { description: "Producto no encontrado" },
          500: { description: "Error del servidor" }
        }
      }
    },

    "/dashboard/{productId}/edit": {
      get: {
        tags: ["Dashboard"],
        summary: "Formulario de edición",
        description: "Devuelve la vista HTML para editar un producto",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: { description: "Formulario de edición mostrado" },
          401: { description: "No autorizado" },
          404: { description: "Producto no encontrado" }
        }
      }
    },

    "/dashboard/{productId}/delete": {
      delete: {
        tags: ["Dashboard"],
        summary: "Eliminar producto",
        description: "Elimina un producto del sistema",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: { description: "Producto eliminado correctamente" },
          401: { description: "No autorizado" },
          404: { description: "Producto no encontrado" },
          500: { description: "Error del servidor" }
        }
      }
    }
  }
};

