import React, { useState } from 'react'
import Title from '../../component/Title'
import TotalBooking from "../../assets/border-all.svg"
import { userBookingsDummyData } from '../MyBooking'
import Revenue from '../../assets/revenue-alt.svg'

export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

const DashBoard = () => {
    const [dataDashBoard, setDataDashBoard] = useState(dashboardDummyData)
    return (
        <div>
            <Title align={"left"} title={"DashBoard"} subTitle={"Dashboard giống như một trung tâm chỉ huy thu nhỏ, nơi mọi dữ liệu phức tạp được trình bày trực quan và gọn gàng trên một màn hình. Nó giúp bạn theo dõi các chỉ số quan trọng (KPI) trong thời gian thực, từ đó đưa ra quyết định nhanh chóng và chính xác mà không cần phải lục lọi qua hàng đống báo cáo thủ công."} />

            <div className='flex gap-4 my-12    '>
                <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-9 ' >

                    <img src={TotalBooking} className='w-6 h-10  max-sm:hidden' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Bookings</p>
                        <p className='text-neutral-400 text-base'>{dataDashBoard.totalBookings}</p>
                    </div>
                </div>

                <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-9 ' >

                    <img src={Revenue} className='w-6 h-10  max-sm:hidden' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Bookings</p>
                        <p className='text-neutral-400 text-base'>{dataDashBoard.totalRevenue}</p>
                    </div>
                </div>
            </div>

            <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
                <table className='w-full '>
                    <thead className='bg-gray-300'>
                        <tr>
                            <th className='py-3 px-4 text-gray-700 font-medium'>
                                User Name
                            </th>

                            <th className='py-3 px-4 text-gray-700 font-medium'>
                                Room Name
                            </th>

                            <th className='py-3 px-4 text-gray-700 font-medium'>
                                Total Amount
                            </th>
                            <th className='py-3 px-4 text-gray-700 font-medium'>
                                Payment Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {dataDashBoard.bookings.map((item, index) => (
                            <tr key={index} >
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    {item.user.username}
                                </td>

                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    {item.room.roomType}
                                </td>

                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    ${item.totalPrice}
                                </td>

                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid?'bg-green-200 text-gray-700' :"bg-amber-200 text-amber-600"}`}>
                                        {item.isPaid ? 'Complete': 'Pending'} 
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashBoard
