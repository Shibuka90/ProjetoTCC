import global from "../../../main/global";

class UsuárioDataService {
    getAll() {
        return global.get("/usuarios")
    }
}

export default new UsuárioDataService()