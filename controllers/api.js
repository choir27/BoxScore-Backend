const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
dbName = "boxScore";

MongoClient.connect(
    process.env.MONGO_URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true})
        .then(client => {
            db = client.db(dbName);
        })

const getDatabase = async(collectionName) => {
    try{
        const data = await db.collection(collectionName).find().toArray();
        return data;
    }catch(err){
        console.error(err);
        return res.status(500).json({message: err});
    }
}

module.exports = {
    getNBA: async(req,res)=>{
        try{
            const data = await getDatabase("nbas");
            res.json(data);
        }catch(err){
            console.error(err);
        }
    }
}