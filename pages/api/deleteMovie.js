import { MongoClient } from "mongodb";



export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const data = req.body;
        const client = await
            MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();

        const yourCollection = db.collection("SavedUserMovies");
        const result = await yourCollection.findOneAndDelete({ _id: req.body.id });

        console.log(req.params);
        client.close();


        res.status(201).json({ message: `my data ${data}` });
    }
}