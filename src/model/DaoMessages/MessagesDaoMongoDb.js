import ContainerMongoDb from '../../containers/ContainerMongoDb.js';

class MessagesDaoMongoDb extends ContainerMongoDb {
constructor(){
    super('messages',
    {
        messages:{
        type: Array,
        required: true
        }
    })
}}

export default MessagesDaoMongoDb;
