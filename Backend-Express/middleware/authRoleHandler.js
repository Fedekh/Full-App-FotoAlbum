const AuthError = require("../exceptions/AuthError");

// Middleware per verificare i ruoli dell'utente
module.exports = function (roles) {
    return (req, res, next) => {
        console.log("che palle si ruoli " + req.user.role);
        if (roles.includes(req.user.role)) {
            next();
        } else {
            const authError = new AuthError("Accesso non autorizzato", 403);
            res.status(authError.status).json(authError.resp());
        }
    };
};
