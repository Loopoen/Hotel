import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { connectDB } from "./configs/db.js"
import userRouter from "./routers/user.route.js"
import hotelRouter from "./routers/hotel.route.js"
import { roomsData } from "../client/src/assets/assets.js"
import routerRoom from "./routers/route.room.js"
import bookingRouter from "./routers/booking.route.js"

dotenv.config()


connectDB()
const app = express()

app.use(express.json())

app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(cookieParser())

app.get("/", (req, res)=>{
  res.send("hello")
})


app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/hotel", hotelRouter)
app.use("/api/room", routerRoom)
app.use("/api/bookings", bookingRouter)

const PORT = process.env.PORT || 5000


app.listen(PORT, (req, res)=>{
  console.log(`server running ${PORT}`)
})
