const { getNavBarAdmin } = require("./getNavBarAdmin.js")

function templateHtmlAdmin(content){
    return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Dashboard</title>
      </head>
          <body>
            <nav style="margin: 20px;">
              ${getNavBarAdmin()}
            </nav>
            <div style="display: flex; flex-wrap: wrap; gap: 50px; justify-content: center;">
              ${content}
            </div>
          </body>
    </html>
    `;
}
module.exports = templateHtmlAdmin;