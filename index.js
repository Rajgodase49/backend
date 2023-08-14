import express from "express"
import cors from "cors"
import bodyParser from "body-parser"


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get("/demo",(req,res)=>{
    res.send("hello word")
})

app.post("/api/post",(req,res)=>{
    console.log(req.body)
})







app.listen(8080,()=>{
    console.log("app connected on port 8080")
})