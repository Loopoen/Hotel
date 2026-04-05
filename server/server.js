import express from "express"
import "dotenv/config" 
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhook.js"


connectDB()



const app = express()

app.use(cors())

app.use(express.json())

app.use(clerkMiddleware())

app.use("/api/clerk", express.raw({ type: "application/json" }), clerkWebhooks)

app.get("/", (req,res)=>{
    res.send("working")
})



const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("server running")
})