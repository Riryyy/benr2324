const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Riry:adib@riry.tv5kopr.mongodb.net/?retryWrites=true&w=majority&appName=Riry";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    client.db("yeet").collection("f").insertOne({ 
      name: "Riry",
      email: "riry@riry",
      age: 21 ,
      status: "active",
      faculty: "Engineering",

    }  
   );
   console.log("Inserted a document into the collection");
  } finally {

    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);
