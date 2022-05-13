import { MongoClient } from "mongodb";



export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const client = await
            MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();

        const yourCollection = db.collection("SavedUserMovies");
        const result = await yourCollection.insertOne(data);

        console.log(result);
        client.close();


        res.status(201).json({ message: "Data inserted successfully!" });
    }
}