import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("connected DB")
    }
    catch(error){
        console.log(error.message)
    }
}
