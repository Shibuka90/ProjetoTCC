import global from "../../../main/global";

class Usu├írioDataService {
    getAll() {
        return global.get("/usuarios")
    }
}

export default new Usu├írioDataService()