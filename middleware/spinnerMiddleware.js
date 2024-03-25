// spinnerMiddleware.js
const spinnerMiddleware = (req, res, next) => {
    // Adicione uma propriedade ao objeto de resposta para sinalizar ao frontend que o spinner deve ser exibido
    res.locals.showSpinner = true;
    next();
};

module.exports = spinnerMiddleware;
