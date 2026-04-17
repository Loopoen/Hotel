import express from "express"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import {isOwner} from "../middleware/isOwner.js"
import { bookRoom, checkAvailability, checkRoomAvailability, getHotelBookings, getUserBooking } from "../controllers/booking,controller.js"


const bookingRouter = express.Router()

bookingRouter.post("/check-avaibility", checkRoomAvailability)
bookingRouter.post("/book", isAuthenticated, bookRoom)
bookingRouter.get("/user", isAuthenticated, getUserBooking)
bookingRouter.get("/hotel", isAuthenticated, isOwner, getHotelBookings)



export default bookingRouter