import Room from "../models/room.model.js"

export const addRoom = async(req, res)=>{
    try{
        const {roomType, hotel, pricePerNight, description, amenities, isAvailable} = req.body

        const image = req.files?.map(file => file.filename) 

        const newRoom = await Room.create({
            roomType,
            hotel,
            pricePerNight,
            description,
            amenities,
            isAvailable,
            images:image
        })
     return res.status(201).json({
            message: "Thêm room thành công",
            success: true,
            data: newRoom
        });
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({message:"loi server"})
        
    }
}

export const getOwnerRooms = async(req, res)=>{
    try{
        const {id} = req.user

        const rooms = await Room.find().populate({
            path:'hotel',
            match:{owner:id},
            select:"hotelName hotelAddress rating amenities"
        })

        // const ownerRooms = rooms.filter((room)=> rooms.hotel.owner === id)

        return res.status(200).json({rooms, success:true})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"loi server"})
        
    }
}

export const getAllRooms = async(req, res)=>{
    try{
        const rooms = await Room.find()
        .populate({
            path:"hotel",
            select:"hotelName hotelAddress amenities rating owner",
            populate:{
                path:"owner",
                select:"name email"
            }
        })
        .exec()
        return res.json({success:true, rooms})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Loi server"})
    }   
}

export const deleteRoom  = async(req, res)=>{
    try{
        const {roomId} = req.params
        const deletedRoom = await Room.findByIdAndDelete(roomId)

        if(!deletedRoom){
            return res.status(404).json({success:false, message:"room khong ton tai"})
        }

        return res.json({success:true, message:"xoa phong thanh cong"})
    }
    catch(error){
        return res.status(500).json({message:"loi server"})
    }
}