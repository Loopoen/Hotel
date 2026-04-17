import Hotel  from "../models/hotel.mode.js";

export const registerHotel = async(req, res)=>{
    const {id} = req.user
    try{
        const {hotelName, hotelAddress, rating ,price , amenities}= req.body
        const image = req.file.filename

        if(!hotelAddress || !hotelName || !rating || !price || !amenities){
            return res.status(400).json({message: "chua du cac thanh phan", success:false})
        }

        const newHotel = new Hotel({
            hotelName, hotelAddress, rating,  price , amenities, image, owner:id
        })
        await newHotel.save()

        return res.status(201).json({message:"tao hotel thanh cong", success:true})
    }
    catch(error){
        return res.status(500).json({message:"loi server"})
    }
}

export const getOwnerHotels  = async(req, res)=>{
    const {id} = req.user
    try{
        const hotels = await Hotel.find({owner:id}).populate("owner", "name email")
        
        return res.status(200).json({hotels, success:true})
    }
    catch(error){
        return res.status(500).json({message:"loi server"})
    }
}

export const getAllHotels = async (req, res)=>{
    try{
        const hotels = await Hotel.find().populate("owner", "name email")
         return res.status(200).json({hotels, success:true})
    }
    catch(error){
        return res.status(500).json({message:"loi server"})
    }
}

export const deleteHotel  = async (req, res)=>{
    const {hotelId} = req.params

    try{
        const deletedHotel = await Hotel.findOneAndDelete(hotelId)
        if(!deleteHotel){
            return res.status(404).json({message:"khong co hotel nao de xoa"})
        }

        return res.status(200).json({message:"xoa hotel thanh cong", success:true})
    }
    catch(error){
        res.status(500).json({message:"loi server"})
    }
}