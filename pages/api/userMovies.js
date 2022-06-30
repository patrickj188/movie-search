import { MongoClient } from "mongodb";

export default async function getUserMovies(req, res) {
  if (req.method === "GET") {
    const user_id = req.query["user_id"];
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const savedMoviesCollection = db.collection("SavedUserMovies");

    const savedMovies = await savedMoviesCollection
      .find({ user_id: user_id })
      .toArray();

    client.close();
    res.json(savedMovies);
  }
}
