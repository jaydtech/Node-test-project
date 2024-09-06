import express from "express";

const app = express();
const port = process.env.PORT  || 3000;

app.use(express.json());

app.get("/",(req,res)=>{
   res.send("<h1>Welcome to node test app1</h1>");
});

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
});