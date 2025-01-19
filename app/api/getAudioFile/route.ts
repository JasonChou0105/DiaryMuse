import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection
const uri = process.env.MONGODB_URI;
let cachedClient = null;

async function getMongoClient() {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await cachedClient.connect();
  }
  return cachedClient;
}

// Handler function for the API route
export async function GET() {
  try {
    const client = await getMongoClient();
    const database = client.db("uottahack7");
    const collection = database.collection("test");

    const data = await collection.find({}).toArray();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Unable to fetch data" },
      { status: 500 }
    );
  }
}
