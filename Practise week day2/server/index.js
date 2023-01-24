const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
const { Schema } = mongoose;

const productSchema = new Schema({
    imageUrl: { type: String, required: true },
    functionName: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
})

const Product = mongoose.model('product', productSchema)

const app = express()

app.use(cors())
app.use(bodyParser.json())

//get All products

app.get("/product", (req, res) => {
    Product.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})


//get by id
app.get("/product/:id",(req,res)=>{
    const {id}= req.params
    Product.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:"not found"})
            }
        }else{
            res.status(500).json({message:"server cokdu"})
        }
    })

})


//ADD new product
app.post("/product",(req,res)=>{
    const user = new Product({
        imageUrl:req.body.imageUrl,
        functionName:req.body.functionName,
        name:req.body.name,
        price:req.body.price,
    })

    user.save()
    res.send("created new product")
})

//deleted
app.delete("/product/:id",(req,res)=>{
    const {id}=req.params
    Product.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("deleted")
        }else{
            res.status(404).json({message:err})
        }
    })
})


const PORT=process.env.PORT
const url =process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set("strictQuery", true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("db connected");
        app.listen(PORT,()=>{
            console.log("server start");
        })
    }
})


