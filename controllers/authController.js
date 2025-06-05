// Manejo de autentificacion
require("dotenv").config();

exports.getLoginForm = (req,res) =>{
    res.send(`
        <h1>Login</h1>
            <form method="POST" action="/login">
                <input name="username" placeholder="USER"/>
                <input name="password" placeholder="PASSWORD"/>
                <button type="submit">Entrar</button>
            </form>
        
        `);
};

exports.login = (req,res) =>{
    const {username, password} = req.body;
    if(username === process.env.USER && password === process.env.PASSWORD){
        req.session.authenticated = true;
        return res.redirect("/dashboard");
    }
    res.send("<p>Login INCORRECTO</p><a href='/login'>Intentar otra vez</a> <br> <a href='/products'>Ir a tienda</a>");
};

exports.logout = (req,res) =>{
    req.session.destroy(() => {
        res.redirect("/login");
    });
};
