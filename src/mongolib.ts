import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}

const uri = process.env.MONGODB_URI;
const options = {};

// Global variable to ensure we reuse the same MongoClient instance during hot reloads in development
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

try {
    if (process.env.NODE_ENV === "development") {
        if (!global._mongoClientPromise) {
            client = new MongoClient(uri, options);
            global._mongoClientPromise = client.connect()
                .catch(error => {
                    console.error('MongoDB connection error:', error);
                    throw error;
                });
        }
        clientPromise = global._mongoClientPromise;
    } else {
        client = new MongoClient(uri, options);
        clientPromise = client.connect()
            .catch(error => {
                console.error('MongoDB connection error:', error);
                throw error;
            });
    }
} catch (error) {
    console.error('MongoDB initialization error:', error);
    throw error;
}

export default clientPromise;
