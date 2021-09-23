module.exports = app => {
    app.route('/usuarios')
        .post(app.api.usuario.save)
        .get(app.api.usuario.get)

    app.route('/usuarios/:codigo')
        .put(app.api.usuario.save)
}