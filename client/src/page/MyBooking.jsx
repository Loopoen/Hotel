import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import { hotelDummyData, roomsDummyData, userDummyData } from '../component/FeatureDestination'
import locationIcon from "../assets/land-layer-location.svg"
import guestIcon from "../assets/user.svg"
import { AppContext } from '../context/AppContext'



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]


const MyBooking = () => {
    const {booking} = useContext(AppContext)
    console.log(booking)

    return (
        <div className='py-28 md:pt-32 px-4 md;px-16 lg:px-24 xl:px-32'>
            <Title title={"My Booking"} subTitle={"Hành trình của bạn, ưu tiên của chúng tôi."} align={"left"} />



            <div className='max-w-6xl mt-8 w-full text-gray-800'>

                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b py-3 border-gray-300 font-medium text-base'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>


                 {
                booking.map((booking) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                        <div className='flex flex-col md:flex-row'>
                            <img src={booking.room.images[0]} className='min-md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col gap-2 max-md:mt-3  ml-5'>
                                <p className='text-xl'>{booking.hotel.name}

                                    <span className='font-inter text-sm ml-2'>{booking.room.roomType}</span>
                                </p>

                                <div className='flex items-center gap-1 text-sm text-gray-800'>
                                    <img src={locationIcon} className=' w-5 h-5 '/>
                                    <span>{booking.hotel.address}</span>
                                </div>

                                     <div className='flex items-center gap-1 text-sm text-gray-800'>
                                    <img src={guestIcon} className=' w-5 h-5 '/>
                                    <span>Guests: {booking.guests}</span>
                                </div>
                                <p>Total: ${booking.totalPrice}</p>
                                
                            </div>
                        </div>

                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>

                                <p>Check-In:</p>
                                 <p className='text-gray-500'>{new Date(booking.checkInDate).toDateString()}</p>
                            </div>

                               <div>

                                <p>Check-Out:</p>
                                <p className='text-gray-500'>{new Date(booking.checkOutDate).toDateString()}</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-start justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500": "bg-red-500"}`}>
                                </div>
                                <p className={`text-sm ${booking.isPaid ? "text-green-500": "text-red-500"}`}>
                                    {booking.isPaid ? "Paid": "Unpaid"}
                                </p>
                            </div>

                            {
                                !booking.isPaid && (
                                    <button className='px-5 py-2 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-500 transition-all cursor-pointer'>
                                        Pay Now
                                    </button>
                                )
                            }

                        </div>


                    </div>
                ))
            }

            </div>
           
        </div>
    )
}

export default MyBooking