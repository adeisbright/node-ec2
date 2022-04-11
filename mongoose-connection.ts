import { connect, connection } from "mongoose";
import dotenv from "dotenv" 

dotenv.config() 

interface IMongooseOption {
    useNewUrlParser: boolean;
    autoIndex: boolean;
    keepAlive: boolean;
    useUnifiedTopology: boolean;
    keepAliveInitialDelay: number;
    serverSelectionTimeoutMS: number;
    socketTimeoutMS: number;
}

const mongooseOptions: IMongooseOption = {
    useNewUrlParser: true,
    autoIndex: false,
    keepAlive: true,
    useUnifiedTopology: true,
    keepAliveInitialDelay: 5e6,
    serverSelectionTimeoutMS: 10e3,
    socketTimeoutMS: 5000
};



const startMongoDB = async () => {
    try {
        await connect(process.env.MONGO_ATLAS as string, mongooseOptions)
            .then(() => console.log("Connected to the database"))
            .catch((error) => console.log(error));

        process.on("SIGINT", () => {
            connection.close(() => {
                console.log("Mongoose terminated. Process ended");
            });
            process.exit(0);
        });
        return;
    } catch (error) {
        console.log(error);
    }
};

export default startMongoDB;
