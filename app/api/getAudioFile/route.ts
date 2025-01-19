import { MongoClient } from "mongodb";

const uri = "your_mongodb_connection_string";
const client = new MongoClient(uri);

export default async function route(req, res) {
  try {
    await client.connect();
    const database = client.db("yourDatabaseName");
    const collection = database.collection("yourCollectionName");

    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch data" });
  } finally {
    await client.close();
  }
}
