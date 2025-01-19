import clientPromise from "@/src/mongolib"; // Adjust the path as necessary

// Function to get all posts from a specific user
export async function getPostsByUser(user) {
  try {
    const client = await clientPromise;
    const db = client.db("uottahack7"); // Replace with your database name
    const collection = db.collection("userDiary"); // Replace with your collection name

    const posts = await collection.find({ user }).toArray();
    return posts;
  } catch (error) {
    console.error("Error fetching posts by user:", error);
    throw new Error("Failed to fetch posts by user");
  }
}

// Function to get the audio file for a specific post by its prompt
const { MongoClient } = require("mongodb");

export default async function fetchAudioFiles() {
  const uri = "your_mongodb_connection_string";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("yourDatabaseName");
    const collection = database.collection("yourCollectionName");

    // Query to fetch only the audioFile field
    const cursor = collection.find(
      {},
      { projection: { audioFile: 1, _id: 0 } }
    );

    const results = await cursor.toArray();
    console.log(results); // Prints an array of audioFile values
  } finally {
    await client.close();
  }
}

// Function to get all posts for a specific genre
export async function getPostsByGenre(genre) {
  try {
    const client = await clientPromise;
    const db = client.db("uottahack7");
    const collection = db.collection("test");

    const posts = await collection.find({ genres: genre }).toArray();
    return posts;
  } catch (error) {
    console.error("Error fetching posts by genre:", error);
    throw new Error("Failed to fetch posts by genre");
  }
}

// Function to get posts within a specific date range
export async function getPostsByDateRange(startDate, endDate) {
  try {
    const client = await clientPromise;
    const db = client.db("uottahack7");
    const collection = db.collection("test");

    const posts = await collection
      .find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .toArray();
    return posts;
  } catch (error) {
    console.error("Error fetching posts by date range:", error);
    throw new Error("Failed to fetch posts by date range");
  }
}

// Function to get the lyrics of a specific post by its prompt
export async function getLyricsByPrompt(prompt) {
  try {
    const client = await clientPromise;
    const db = client.db("uottahack7");
    const collection = db.collection("test");

    const post = await collection.findOne(
      { prompt },
      { projection: { lyrics: 1 } }
    );
    if (!post) throw new Error("Post not found");

    return post.lyrics;
  } catch (error) {
    console.error("Error fetching lyrics by prompt:", error);
    throw new Error("Failed to fetch lyrics by prompt");
  }
}

// Function to get all posts
export async function getAllPosts() {
  try {
    const client = await clientPromise;
    const db = client.db("uottahack7");
    const collection = db.collection("test");

    const posts = await collection.find({}).toArray();
    return posts;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw new Error("Failed to fetch all posts");
  }
}
