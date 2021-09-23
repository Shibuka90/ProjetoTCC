const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt .genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    
    const save = async (req, res) => {
        const usuario = { ...req.body }
        if(req.params.codigo) usuario.codigo = req.params.codigo

        try{
            existsOrError(usuario.nome, 'Nome não informado')
            existsOrError(usuario.email, 'Email não informado')
            existsOrError(usuario.cpf, 'CPF não informado')
            existsOrError(usuario.datanasc, 'Data de Nascimento não informada')
            existsOrError(usuario.estadocivil, 'Estado Civil não informado')
            existsOrError(usuario.sexo, 'Sexo não informado')
            existsOrError(usuario.cargo, 'Cargo não informado')
            existsOrError(usuario.cepusuario, 'CEP não informado')
            existsOrError(usuario.tipo, 'Tipo do Logradouro não informado')
            existsOrError(usuario.endereco, 'Endereço não informado')
            existsOrError(usuario.numero, 'Número não informado')
            existsOrError(usuario.bairro, 'Bairro não informado')
            existsOrError(usuario.municipio, 'Municipio não informado')
            existsOrError(usuario.ufmunicipio, 'UF do Municipio não informado')
            existsOrError(usuario.celddd, 'DDD do Celular não informado')
            existsOrError(usuario.cel, 'Celular não informado')
            existsOrError(usuario.password, usuario.confirmPassword, 'Senha não conferem')

            const usuarioFromDB = await app.db('usuarios')
                .where ({ email: usuario.email }).first()
            if(!usuario.codigo){
                notExistsOrError(usuarioFromDB, 'Usuário já cadastrado')
            }            
        }catch(msg) {
            return res.status(400).send(msg)
        }

        usuario.password = encryptPassword(req.body.password)
        delete usuario.confirmPassword

        if(usuario.codigo){
            app.db('usuarios')
                .update(usuario)
                .where({ codigo: usuario.codigo })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('usuarios')
                .insert(usuario)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

    }

    const get = (req, res) => {
        app.db('usuarios')
            .select('codigo', 'nome', 'email', 'cargo', 'admin' )
            .then(usuarios => res.json(usuarios))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}