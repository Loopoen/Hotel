import React, { useContext, useState } from 'react'
import { roomsDummyData } from '../component/FeatureDestination'
import { useNavigate } from 'react-router-dom'
import StarRating from '../component/StarRating'
import locationIcon from "../assets/land-layer-location.svg"
import freeWifiIcon from "../assets/wifi.svg"
import freeBreakfastIcon from "../assets/noodles.svg"
import roomServiceIcon from "../assets/room-service.svg"
import mountainIcon from "../assets/mountains.svg"
import poolIcon from "../assets/swimming-pool.svg"
import { AppContext } from '../context/AppContext'



export const facilityIcons = {
    "Free WiFi": freeWifiIcon,
    "Free Breakfast": freeBreakfastIcon,
    "Room Service": roomServiceIcon,
    "Mountain View": mountainIcon,
    "Pool Access": poolIcon,
};


const CheckBox = ({label, selected = false, onChange =()=>{}})=>{

    return(

        <div>
            <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>

                <input type='checkbox' checked={selected} onChange={(e)=>{e.target.checked, label}}/>

                <span className='font-light select-none'>{label}</span>
            </label>
        </div>

    )

    
}

const RadioButton = ({label, selected = false, onChange = ()=>{ }})=>{
    return(


        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>

            <input type='radio' name='sortOption' checked={selected} onChange={()=>{label}}/>

            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {
    
    const [openFilter ,setOpenFilter] = useState(false)
    const {roomData, navigate} = useContext(AppContext)

    const roomType =[
        "Single Bed",
        "Double Bed",
        "Normal Room",
        "Luxury Room",
        "President Room",
        "Family Room",

    ]

    const priceRange = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2000",
        "2000 to 3000"
    ]

    const sortOptions = [
        "Price Low to High", 
        "Price Hight to Low",
        "Newest Frist"
    ]



    return (
        <div className='flex flex-row relative'>


            <div className='flex flex-col-reverse lg:flex-col items-start justify-between pt-28 md:pt-36 px-4 md:px-116 lg:px-24 xl:px-32'>
                <div className='flex flex-col items-start text-left'>

                    <h1 className='text-4xl md:text-[40px] '>Hotel Room</h1>
                    <p className='text-sm md:text-base text-gray-500/90 mt-2'>Chào mừng bạn đến với không gian nghỉ dưỡng tinh tế, nơi sự tiện nghi và phong cách giao thoa để mang lại cho bạn trải nghiệm lưu trú đáng nhớ nhất. <br />Căn phòng được thiết kế với lối kiến trúc hiện đại, tận dụng tối đa ánh sáng tự nhiên, tạo nên cảm giác thoáng đãng và thư thái ngay từ khi bạn bước vào.</p>
                </div>

                {
                    roomData.map((room) => (
                        <div className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-200 last:pb-30 last:border-0'>
                            <img onClick={() => navigate(`/rooms/${room._id}`)} src={`http://localhost:4000/images/${room.images[0]}`} className='w-85 h-40 rounded-2xl shadow-lg object-cover cursor-pointer' />

                            <div className='flex flex-col gap-2 md:w-1/2'>

                                <p className='text-gray-500'>{room.hotel.hotelAddress}</p>
                                <p className='text-gray-800 text-3xl cursor-pointer w-60'>{room.hotel.hotelName}</p>
                                <div className='flex items-center'>

                                    <StarRating />
                                    <p className='ml-2'>1000+ Lượt xem</p>
                                </div>

                                <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>

                                    <img src={locationIcon} className='w-6 h-6' />
                                    <span>{room.hotel.hotelAddress}</span>
                                </div>

                                <div className='flex flex-wrap items-center mt-3 mb-5 gap-4'>
                                    {

                                        room.amenities.split(",").map((item, index) => (
                                            <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/50'>

                                                <img src={facilityIcons[item]} className='w-5 h-5' alt={item} />

                                                <p className='text-sm'>{item}</p>
                                            </div>


                                        ))
                                    }
                                </div>

                                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                            </div>
                        </div>
                    ))}
            </div>

            {/* <div className='absolute top-30 right-30'>
                <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-10'>

                    <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-200 ${openFilter && "border-b"}`}>
                        <p className='text-base font-medium text-gray-800'>FILTERS</p>

                        <div className='text-sm cursor-pointer  '>
                            <span className='lg:hidden'  onClick={()=>setOpenFilter(!openFilter)}>
                                {
                                    openFilter ?
                                    'HIDE':"SHOW"
                                }
                                </span>
                            <span className='hidden lg:block'>
                                CLEAR
                            </span>
                        </div>

                    </div>

                    <div className={`${openFilter ? 'h-auto':'h-0 lg:h-auto'} overflow-hidden transition-all duration-500`}>
                            
                            <div className='px-5 pt-5'>
                                    <p className='font-medium text-gray-800 pb-2'>Popular filter</p>

                                    {
                                        roomType.map((room, index)=>(
                                            <CheckBox key={index} label={room}/>
                                        ))
                                    }

                            </div>

                             <div className='px-5 pt-5'>
                                    <p className='font-medium text-gray-800 pb-2'>Price Range</p>

                                    {
                                    priceRange.map((range, index)=>(
                                            <CheckBox key={index} label={` $ ${range}`}/>
                                        ))
                                    }

                            </div>

                              <div className='px-5 pt-5 pb-5'>
                                    <p className='font-medium text-gray-800 pb-2'>Price Range</p>

                                    {
                                    sortOptions.map((range, index)=>(
                                            <RadioButton key={index} label={range}/>
                                        ))
                                    }

                            </div>

                            


                    </div>

                   
                </div>

            </div> */}
        </div>



    )

}

export default AllRooms