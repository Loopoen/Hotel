    import React, { useContext, useState } from 'react'
    import Title from '../../component/Title'
    import { hotelDummyData, roomsDummyData, userDummyData } from '../../component/FeatureDestination'
    import locationIcon from "../../assets/land-layer-location.svg"
    import guestIcon from "../../assets/user.svg"
    import { AppContext } from '../../context/AppContext'
    import { CheckCircle, Clock, Trash2, XCircle } from 'lucide-react'




    const MyBooking = () => {
        const { booking } = useContext(AppContext)
        console.log(booking)

        const getStatusColor = (status) => {
            switch (status) {
                case "confirmed":
                    return "bg-green-500"

                case "cancelled":
                    return "bg-red-500"
                case "pending":
                    return "bg-yellow-500"
                default:
                    return "bg-gray-500"
            }
        }

        const getStatusTextColor = (status) => {
            switch (status) {
                case "confirmed":
                    return "text-green-500"

                case "cancelled":
                    return "text-red-500"
                case "pending":
                    return "text-yellow-500"
                default:
                    return "text-gray-500"
            }
        }


        const getStatusIcon = (status) => {
            switch (status) {
                case "confirmed":
                    return CheckCircle

                case "cancelled":
                    return XCircle
                case "pending":
                    return Clock
                default:
                    return Clock
            }
        }

 

        return (
            <div className='py-28 md:pt-32 px-4 md;px-16 lg:px-24 xl:px-32 w-full'>
                <Title title={"My Booking"} subTitle={"Hành trình của bạn, ưu tiên của chúng tôi."} align={"left"} />



                <div className='max-w-8xl mt-8 w-full text-gray-800'>

                    <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr_1fr] w-full border-b py-3 border-gray-300 font-medium text-base'>
                        <div className='w-1/6'>Hotels</div>
                        <div className='w-1/4'>Date & Timings</div>
                        <div className='w-1/2'>Payment</div>
                        <div className='w-1/2'>Action</div>
                    </div>


                    {
                        booking.map((booking) => {
                                   const StatusIcon = getStatusIcon(booking.status)
                             return<div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                                <div className='flex flex-col md:flex-row'>
                                    <img src={booking.room.images[0]} className='min-md:w-44 rounded shadow object-cover' />
                                    <div className='flex flex-col gap-2 max-md:mt-3  ml-5'>
                                        <p className='text-xl'>{booking.hotel.name}

                                            <span className='font-inter text-sm ml-2'>{booking.room.roomType}</span>
                                        </p>

                                        <div className='flex items-center gap-1 text-sm text-gray-800'>
                                            <img src={locationIcon} className=' w-5 h-5 ' />
                                            <span>{booking.hotel.address}</span>
                                        </div>

                                        <div className='flex items-center gap-1 text-sm text-gray-800'>
                                            <img src={guestIcon} className=' w-5 h-5 ' />
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
                                        <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}>
                                        </div>
                                        <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                                            {booking.isPaid ? "Paid" : "Unpaid"}
                                        </p>
                                    </div>

                                    <div className='flex gap-2 mt-2 justify-center items-center' >
                                        

                                       

                                        <StatusIcon className={`w-4 h-4 ${getStatusTextColor(booking.status)}`} />
                                        <p className={`text-sm ${getStatusTextColor(booking.status)}`}>
                                            {booking.status}
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

                                <div>
                                   <div>

                                        {
                                            booking.status !== "cancelled" && (
                                                <button onClick={""} className='text-red-60 hover:bg-red-50 rounded-lg transition-colors'> 
                                                    <Trash2 className='w-4 h-4'/>
                                                </button>
                                            )
                                        }
                                   </div>
                                </div>

                                

                                


                            </div>
                        })
                    }

                </div>

            </div>
        )
    }

    export default MyBooking