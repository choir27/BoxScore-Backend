const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const NBA = require("../models/NBA");

let db,
dbName = "test";

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
    updateNBA: async(req,res)=>{
        try{
            fetch("https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json")
                .then(res=>res.json())
                .then(async(data)=>{
                   await NBA.create({data:data});
                   res.json({msg: "updated NBA data"});
                });
        }catch(err){
            console.error(err);
        }
    },
    getNBA: async(req,res)=>{
        try{
            // NBA game: https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json
            // MLB game: https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json

            const data = await getDatabase("nbas");
            res.json(data);
        }catch(err){
            console.error(err);
        }
    }
}