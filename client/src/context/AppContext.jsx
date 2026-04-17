import React, { createContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import  {hotelsData, roomsData, bookingData } from "../assets/assets.js"
import axios from "axios"
import toast from 'react-hot-toast'
axios.defaults.withCredentials = true
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL


export const AppContext = createContext()
 

const AppContextProvider = ({children})=>{
    const navigate = useNavigate()
    

    const [user, setUser] = useState(null)
    const [owner, setOwner] = useState(false)
    const [hotelData, setHotelData] = useState([])
    const [roomData, setRoomData] = useState([])
    const [booking, setBooking] = useState([])


    const checkUserLoggedInOrNot = async()=>{
        try{
            const {data} = await axios.get("/api/user/is-auth")

            if(data.success){
                setUser(true)
            }
        }
        catch(error){
            console.log("error", error)
        }
    }
   

    const fetchHotelData = async()=>{
         try{
                    const {data} = await axios.get("/api/hotel/get-all")
        
                    if(data.success){
                        setHotelData(data.hotels)
                    }
                    else{
                        toast.error(data.message)
                    }
                }
                catch(error){
                    toast.error(error.message)
                }
    }
    const fetchRoomData = async()=>{
         try{
            const {data} = await axios.get("/api/room/get-all")
            if(data.success){
                setRoomData(data.rooms)

            }else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
        }

    const fetchBookingData = ()=>{
        setBooking(bookingData)
    }

    useEffect(()=>{
        checkUserLoggedInOrNot()
        fetchHotelData()
        fetchRoomData()
        fetchBookingData()
    }, [])

    const value = {navigate, user, setOwner, setUser, owner, hotelData, setHotelData, roomData, setRoomData, booking, setBooking, axios}
     

    return<AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    
}

export default AppContextProvider