function getNavBarAdmin(){
    return `
        <nav style="background-color: black; padding: 10px;">
            <ul style="list-style: none; display: flex; gap: 50px; justify-content: center;">
                <a href="/dashboard/new" style="background-color: white; border-radius: 50px;color: black; text-decoration: none; padding:5px;">NEW + </a>
                <li><a href="/dashboard" style="color: white; text-decoration: none;">PRODUCTOS</a></li>
                <li><a href="/dashboard/camisetas" style="color: white; text-decoration: none;">CAMISETAS</a></li>
                <li><a href="/dashboard/pantalones" style="color: white; text-decoration: none;">PANTALONES</a></li>
                <li><a href="/dashboard/zapatos" style="color: white; text-decoration: none;">ZAPATOS</a></li>
                <li><a href="/dashboard/accesorios" style="color: white; text-decoration: none;">ACCESORIOS</a></li>
            </ul>
        </nav>
    `;
}
module.exports = {getNavBarAdmin};
