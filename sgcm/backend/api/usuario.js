module.exports = app => {
    const save = (req, res) => {
        res.send('usuario save')
    }

    return { save }
}