import React from 'react'
import { Link } from 'react-router-dom'
import startIcon from "../assets/star.svg"
import locationIcon from "../assets/land-layer-location.svg"


const Hotel = ({room, index, key}) => {
  console.log(index % 2 ===0)
  return (
    <Link to={'/rooms/' + room._id} onClick={()=>{scrollTo(0, 0)} }>
        <img src={room.images[0]} alt='hotel room' className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-400/90 shadow-[0px_4px_4px_rgba(0,0,0,0,0,5)]'/>
       

        <div className='p-4 pt-5'>

            <div className='flex items-center justify-between'>

                <p className='text-xl font-medium text-gray-600' >{room.hotel.name}</p>
                <div className='flex items-center gap-1'>
                  <img src={startIcon} className='w-4 h-4' alt='star-icon'/> 4.5
                </div>
            </div>

            <div className='flex items-center gap-1 text-sm'>
                <img src={locationIcon} className='w-4 h-4' alt='locationIcon'/>

                <span>{room.hotel.address}</span>
            </div>

            <div className='flex itmes-center gap-1 justify-between mt-4'>

              <p>
                <span className='text-xl text-gray-700'>
                  {room.pricePerNight}
                </span>
                /night
              </p>

              <button className='px-4 py-2 text-sm font-medium border border-gray-400 rounded hover:bg-gray-50 transition-all cursor-pointer'>
                  Đặt Ngay

              </button>

            </div>
        </div>
    </Link>
  )
}

export default Hotel