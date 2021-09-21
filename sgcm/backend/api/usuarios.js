const bcrypt = require('bcrypt-nodejs');
const validation = require('./validation');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api;validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const usuarios = { ...req.body }
        if(req.params.codigo) usuarios.codigo = req.params.codigo
        
        try{
            existsOrError(usuarios.nome, 'Nome não informado')
            existsOrError(usuarios.email, 'E-mail não informado')
            existsOrError(usuarios.password, 'Senha não informada')
            existsOrError(usuarios.confirmPassword, 'Confirmação de Senha Inválida')
            equalsOrError(usuarios.password, usuarios.confirmPassword, 'Senha não conferem')

            const userFromDB = await app.db('usuarios')
                .where({email: usuarios.email}).first()
                if(usuarios.codigo){
                    notExistsOrError(userFromDB, 'Usuário já cadastrado')
                }
            }catch(msg){
                    return res.status(400).send(msg)
            }

            usuarios.password = encryptPassword(usuarios.password)
            delete usuarios.confirmPassword

            if(usuarios.id) {
                app.db('usuarios')
                    .update(usuarios)
                    .where ({ codigo: usuarios.codigo })
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err))
            }else{
                app.db('usuarios')
                    .insert(usuarios)
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err))
            }
        }

        const get = (req, res) => {
            app.db('usuarios')
                .select('codigo', 'nome', 'email', 'cpf', 'datanasc', 'cargo', 'admin' )
                .then(usuarios => res.json(usuarios))
                .catch(err => res.status(500).send(err))
        }

    return { save, get }
}