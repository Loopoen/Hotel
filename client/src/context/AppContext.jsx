import React, { createContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import  {hotelsData, roomsData, bookingData } from "../assets/assets.js"


export const AppContext = createContext()
 

const AppContextProvider = ({children})=>{
    const navigate = useNavigate()
    

    const [user, setUser] = useState(null)
    const [owner, setOwner] = useState(false)
    const [hotelData, setHotelData] = useState([])
    const [roomData, setRoomData] = useState([])
    const [booking, setBooking] = useState([])
   

    const fetchHotelData = ()=>{
        setHotelData(hotelsData)
    }
    const fetchRoomData = ()=>{
        setRoomData(roomsData)
    }

    const fetchBookingData = ()=>{
        setBooking(bookingData)
    }

    useEffect(()=>{
        fetchHotelData()
        fetchRoomData()
        fetchBookingData()
    }, [])

    const value = {navigate, user, setOwner, setUser, owner, hotelData, setHotelData, roomData, setRoomData, booking, setBooking}
     

    return<AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    
}

export default AppContextProvider