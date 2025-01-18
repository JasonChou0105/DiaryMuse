import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}

const uri = process.env.MONGODB_URI;
const options = {};

// Global variable to ensure we reuse the same MongoClient instance during hot reloads in development
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    // In development, use a global variable
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, it's fine to use a local variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
