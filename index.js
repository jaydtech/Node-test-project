import express from "express";
import { MongoClient , ServerApiVersion } from "mongodb";

const app = express();
const port = process.env.PORT  || 3000;
const url = "mongodb+srv://jaydeep:XZfXn69iCdYr8Tpj@cluster0.bk2ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

            
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.json());

/*app.get("/",(req,res)=>{
   res.send("<h1>Welcome to node test app1</h1>");
});

app.post("/",(req,res)=>{
  console.log('Received webhook data:', req.body);
  res.status(200).send('Webhook received');
});*/

app.get('/',async(req,res)=>{
  const connection = await client.connect();
  const db = connection.db('test');
  const collection = db.collection('customers');
  /*const result = await collection.find().toArray();
  //res.json(result);
  console.log(result);
  res.send(result);*/

 /* const result = await collection.insertOne({
    name:"Joe",
    age:47,
    city:"London"
  });

  console.log(result);
  res.send(result);*/

  /* const result = await collection.deleteOne({
      name:"Joe"
   });

   console.log(result);
   res.send(result);*/

   const result = await collection.updateOne(
       {name:"Jaydeep"},
       {$set:{age:34}}
   );

   console.log(result);
    res.send(result);
});

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
});
