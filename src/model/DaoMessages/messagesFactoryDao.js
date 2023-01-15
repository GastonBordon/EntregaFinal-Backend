// import messagesDaoFs from "./productsDaoFs.js"
import MessagesDaoMongoDb from "./MessagesDaoMongoDb.js"
class messagesFactoryDAO {
    static get(type) {
        switch (type) {
            // case 'fs':
            //     return new messagesDaoFs("./src/DB/fs/mensajes.txt", [])
            case 'mongo':
                return new MessagesDaoMongoDb()
            default:
                return new messagesDaoFs()
        }
    }
}   

export default messagesFactoryDAO
