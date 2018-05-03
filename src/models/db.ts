import { UserModel } from './User';
import { Connection, createConnection, Mongoose } from 'mongoose';


export class DB {
    // let dbHost = config.dbHost;
    // let dbPort = config.dbPort;
    // let dbName = config.dbName;
    connection: Connection;
    User;

    constructor() {
        try {
            this.connection = createConnection(`mongodb://${'localhost'}:${'27017'}/${'users'}`);
            this.User = this.connection.model(UserModel.name, UserModel.schema);
            console.log('MongoDB Connected');
        }
        catch (err) {
            console.log('Could not connect to MongoDB');
        }

    }
}
