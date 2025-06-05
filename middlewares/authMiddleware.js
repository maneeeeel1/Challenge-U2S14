//Verifica si el usuario esta autentificado antes de acceder a rutas
module.exports = function (req, res, next) {
  if(req.session.authenticated){
  return next();
  }
  res.redirect("/login");
};
