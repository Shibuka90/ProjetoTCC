module.exports = app => {
    app.route('/usuarios')
        .post(app.api.usuarios.save)
        .post(app.api.usuarios.get)

    app.route('/usuarios/:codigo')
        .put(app.api.usuarios.save)
}