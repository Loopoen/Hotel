import express from "express"
import { deleteHotel, getAllHotels, getOwnerHotels, registerHotel } from "../controllers/hotel.controller.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { isOwner } from "../middleware/isOwner.js"
import { upload } from "../configs/multer.js"


const hotelRouter = express.Router()

hotelRouter.post("/register",upload.single("image") ,isAuthenticated, isOwner ,registerHotel)

hotelRouter.get("/get", isAuthenticated, isOwner, getOwnerHotels)
hotelRouter.get("/get-all",  getAllHotels)
hotelRouter.delete("/delete/:hotelId", isAuthenticated, isOwner, deleteHotel)
hotelRouter.get("/test", (req, res) => {
  res.send("Hotel router is working!");
});

export  default  hotelRouter    