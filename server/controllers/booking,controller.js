import Booking from "../models/booking,model.js";
import Hotel from "../models/hotel.mode.js";
import User from "../models/user.model.js";
import Room from "../models/room.model.js";
import transporter from "../configs/nodemailer.js";
import Stripe from "stripe"

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

        const user = await User.findById(id)
        const {room , checkInDate, checkOutDate, person, paymentMethod} = req.body

        const isAvailable  = await checkAvailability({
            room, 
            checkInDate, 
            checkOutDate
        })

        if(!isAvailable){
            return res.status(400).json({message:"room khong co san", success:false})
        }

        const roomData = await Room.findById(room).populate("hotel")
        console.log(roomData)
        let totalPrice = roomData.pricePerNight

        const  checkIn = new Date(checkInDate)
        const checkOut = new Date(checkOutDate)


        const timeDiff = checkOut.getTime() - checkIn.getTime()

        const night = Math.ceil(timeDiff/(1000*3600*24))

        totalPrice = totalPrice * night
        console.log(totalPrice)

        const booking = await Booking.create({
            user:id,
            room,
            hotel:roomData.hotel._id,
            checkIn,
            checkOut,
            person,
            totalPrice,
            paymentMethod
        })

        const   mailOption= {
            from:process.env.SENDER_EMAIL,
            to:user.email,
            html:`<h1>Hello nguoi dep nguoi dep dat phong thanh cong roi nha</h1>`
        }

        await transporter.sendMail(mailOption)

        console.log("hehe")

        return res.json({success:true, message:"tao booking thanh cong"})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({message:"loi server"})
    }
}

export const getHotelBookings = async(req, res)=>{
    try{
        const {id} = req.user
        const hotel = await Hotel.find({owner:id}).select("_id")

        if(!hotel){
            return res.status(404).json({message:"khong tim duoc hotel", success:false})
        }

        const hotelId = hotel.map((hotel)=> hotel._id)

        const bookings = await Booking.find({hotel:{$in:hotelId}})
        .populate("room hotel")
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
            .populate("room hotel")
            .sort({createdAt: -1})

            return res.status(200).json({success:true, bookings}
            )
        }
        catch(error){
            return res.status(500),json({sucess:false, message:"loi server"})
        }
}

export const stripPayment = async(req, res)=>{
    try{
        const {bookingId} = req.body

        const booking =await Booking.findById(bookingId)

        const roomData = await Room.findById(booking.room).populate("hotel")

        const totalPrice  = booking.totalPrice

        const {origin} = req.headers
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

        const line_items = [
            {
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:roomData.hotel.hotelName
                    },
                    unit_amount:totalPrice * 100,

                },
                quantity: 1,

            }
        ]

        const session = await stripeInstance.checkout.sessions.create({
            line_items,
            mode:"payment",
            success_url:`${origin}/loader/my-bookings`,
            cancel_url:`${origin}/my-bookings`,

            metadata:{
                bookingId, 
            }


        })
        await booking.updateOne({isPaid:true, status:"confirmed"})

        return res.json({success:true, url:session.url})
    }
    catch(error){       
        console.log(error)
        return res.status(500).json({message:"loi server", success:false})
    }
}