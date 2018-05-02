import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    try {
        await Mongoose.connect(`mongodb://${'localhost'}:${'27017'}/${'users'}`, { useMongoClient: true });
        console.log('Connected to mongoDB');
    }
    catch (err) {
        console.log('Could not connect to MongoDB');
    }
}

export default connectToDb;