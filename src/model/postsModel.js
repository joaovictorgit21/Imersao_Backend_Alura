import connectionDB from "../config/dbConfig.js";
import dotenv from 'dotenv';


dotenv.config();
const connection = await connectionDB(process.env.STRING_CONNECTION)

export async function getAllPosts() {
    const db = connection.db("imersao_instabytes");
    const collection = db.collection("posts");

    return collection.find().toArray();
};
