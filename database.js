const {MongoClient} = require("mongodb");

const url = 
"mongodb+srv://srivastavaaryaman05:Aryamansri8931020149@namastenode.nbo2w.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        "firstName" : "Akshay",
        "lastName" : "Saini",
        "city" : "Dehradun",
        "Phone no" : "9834680941",
    };
    // Insert Documents
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);
  
    // find documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
    // find the no of documents in collection
    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the User Collection =>", countResult);

    // find all documents with filter of firstName
    const result = await collection.find({firstName:"Aryaman"}).toArray();
    console.log("result => ", result);
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());