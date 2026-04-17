import Booking from "../models/booking,model.js";
import Hotel from "../models/hotel.mode.js";
import User from "../models/user.model.js";
import Room from "../models/room.model.js";

export const checkAvailability  = async({room, checkIn, checkOut})=>{
    try
    {
        const booking = await Booking.find({
            room, checkInDate:{$gte:checkIn}
            
            , checkOut:{$lte:checkOut}
        })

        const isAvailable = booking.length === 0
        return isAvailable
    }
    catch(err){
        console.log(err)
    }
}

export const checkRoomAvailability = async(req, res)=>{
    try{
        const {room, checkIn, checkOut } = req.body
        const isAvailable =  await checkAvailability({room, checkIn, checkOut})

        return res.status(200).json({success:true, isAvailable})
    }   
    catch(error){
        return res.status(500).json({message :"loi server"})
    }
}

export const bookRoom = async(req, res)=>{
    try{
        const {id} = req.user
        const {room, checkIn, checkOut, person, paymentMethod}= req.body

        const isAvailable = await checkAvailability({
            room, 
            checkIn,
            checkOut
        })

        if(!isAvailable){
            return res.status(400).json({message:"room khong co san", success:false})
        }

        const roomData = await Room.findById(room).populate("hotel")
        let totalPrice = roomData.pricePerNight

        const  checkInDate = new Date(checkIn)
        const checkOutDate = new Date(checkOut)


        const timeDiff = checkOutDate.getTime() - checkInDate.getTime()

        const night = Math.ceil(timeDiff/(1000*3600*24))

        totalPrice = totalPrice * night

        const booking = await Booking.create({
            user:id,
            room,
            hotel:roomData.hotel._id,
            checkInDate,
            checkOutDate,
            person,
            totalPrice,
            paymentMethod
        })

        return res.json({success:true, message:"tao booking thanh cong"})

    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"loi server"})
    }
}

export const getHotelBookings = async(req, res)=>{
    try{
        const {id} = req.user
        const hotel = await Booking.find({owner:id}).select("_id")

        if(!hotel){
            return res.status(404).json({message:"khong tim duoc hotel", success:false})
        }

        const hotelId = hotel.map((hotel)=> hotel._id)

        const bookings = await Booking.find({hotel:{$in:hotelId}})
        .populate("room", "hotel")
        .sort({createAt: -1})

        if(bookings.length === 0){
            return res.status(404).json({message:"Booking khong ton tai", success:false})
        } else{
             return res.status(200).json({success:true, bookings})
        }


       

    }
    catch(error){
        return res.status(500).json({message:"loi server"})
    }
}

export const getUserBooking = async(req, res)=>{
        try{
            const {id} = req.user
            const bookings = await Booking.find({user:id})
            .populate("room", "hotel")
            .sort({createAt: -1})

            return res.status(200).json({success:true, bookings}
            )
        }
        catch(error){
            return res.status(500),json({sucess:false, message:"loi server"})
        }
}