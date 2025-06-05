//Generar barra de navegación HTML
function getNavBar(){
    return `
        <nav style="background-color: black; padding: 10px;">
            <ul style="list-style: none; display: flex; gap: 50px; justify-content: center;">
            <li><a href="/products" style="color: white; text-decoration: none;">PRODUCTOS</a></li>
                <li><a href="/camisetas" style="color: white; text-decoration: none;">CAMISETAS</a></li>
                <li><a href="/pantalones" style="color: white; text-decoration: none;">PANTALONES</a></li>
                <li><a href="/zapatos" style="color: white; text-decoration: none;">ZAPATOS</a></li>
                <li><a href="/accesorios" style="color: white; text-decoration: none;">ACCESORIOS</a></li>
            </ul>
        </nav>
    `;
}
module.exports = {getNavBar};