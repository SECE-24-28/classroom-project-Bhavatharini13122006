const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient
 
let database;

async function getDataBase(){

    const client = await mongoClient.connect('mongodb://127.0.0.1:27017')

    database = await client.db('mydb')

    if(!database){

        console.log("Not Connected")
    }
    return database
}
module.exports={getDataBase}