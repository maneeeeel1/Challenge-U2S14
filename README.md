# Challenge-U2S14:
Este challenge contiene la siguiente estructura:
-config
    -cloudinary.js// Configuración de Cloudinary.
    -db.js// Conexión a la base de datos MondoDB

-controllers
    -authControllers.js// Login y logout.
    -productController.js// CRUD para los productos.

-docs
    -basicInfo.js// Información general de la API.
    -components.js// Contiene los schemas, parametros...
    -dashboard.js// Documentación de las rutas CRUD en este caso de admin.
    -indexInfo.js// Importamos los demás modulos para utilizar swagger-ui-express.

-helpers
    -baseHtml.js// Base del producto desde /products.
    -baseHtmlAdmin.js// Base del producto desde /dashboard.
    -detailsAdmin.js// Detalles del producto admin.
    -detailsHtml.js// Detalles del producto para usuarios.
    -editHtml.js// Formulario editar producto.
    -getNavBar.js// Navbar para usuarios
    -getNavBarAdmin.js// Navbar admin.
    -newProduct.js// Formulario para nuevo producto.
    -template.js// Plantilla base de html para usuarios.
    -templateAdmin.js// Plantilla base de html para admin.

-middlewares
    -authMiddleware.js// Middleware para dejar pasar a admin.
    -cloudinaryMiddleware.js// Middleware para subida de imagenes.

-models
    -Product.js// Modelo Mongoose del producto.

-routes
    -authRoutes.js// Rutas de autentificación admin.
    -productRoutes.js// Rutas CRUD de productos.

-test
    -productController.test.js// Pruebas Jest.

-.env// Variables de entorno, user, password, cloudinary_url, port, mongo_uri...
-index.js//Punto de entrada de la app.

##Funciones de la tienda:
El objetivo es que desde /products, puedas ver como usuario, la tienda sin opción a modificaciones, simplemente ver detalles del producto que quieras etc...
Luego, con un login, que puedas acceder a /dashboard, como un administrador ya que, desde ahí, puedes editar el producto, crear uno nuevo, editar uno existente, eliminar uno que ya no quieres tener en la tienda...

Todo esto sin utilizar frameworks, frontend. Utilizando Cloudinary para la subida de imagenes y protegiendo las rutas con middlewares.

###Endpoints de la tienda:
-Rutas de autentificación:
GET /login, muestra el login.
POST /login, inicia sesión admin.
GET /logout, cierra la sesión.

-Rutas de productos pública:
GET /products, lista de productos.
GET /products/:productId, detalles de productos.
GET /camisetas, sección camisetas.
GET /pantalones, sección pantalones.
GET /zapatos, sección zapatos.
GET /accesorios, sección accesorios.

-Rutas de productos privada:
POST /dashboard, crea un nuevo producto.
GET /dashboard, lista de todos los productos.
GET /dashboard/new, formulario para crear nuevo producto.
GET /dashboard/camisetas, ver productos "Camiseta".
GET /dashboard/pantalones, ver productos "Pantalones".
GET /dashboard/zapatos, ver productos "Zapatos".
GET /dashboard/accesorios, ver productos "Accesorios".
GET /dashboard/:productId, detalles de producto específico.
GET /dashboard/:productId/edit, formulario para editar un producto.
PUT /dashboard/:productId, actualiza los datos del producto.
DELETE /dashboard/:productId/delete, elimina el producto.

####Tecnologías usadas:
-Node.js
-Express
-MongoDB y Mongoose
-Cloudinary
-Multer
-dotenv
-Helmet
-Jest
-Swagger

#####Poner en marcha:
Para poner en marcha esta aplicación, primero aplicamos "npm i ", con el package.json descargado, tenemos dos opciones, " node index.js " , si actualizas algo, tendras que tirarla y volverla a iniciar.
O por otro lado usar " npm run dev " y si haces Ctrl+s se aplicaran solos los cambios.
