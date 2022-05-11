import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Patrick:gallifrey18@cluster0.ty1tq.mongodb.net/movies?retryWrites=true&w=majority')
        const db = client.db();

        const moviesCollection = db.collection('users')
        const result = await moviesCollection.insertOne(data)

        console.log(result)

        client.close();

        res.status(201).json({message: 'User Created'})

    }
}

