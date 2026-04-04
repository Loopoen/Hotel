import React, { useState } from 'react'
import { roomsDummyData } from '../../component/FeatureDestination'
import Title from '../../component/Title'

const ListRoom = () => {
    const [rooms, setRooms] = useState(roomsDummyData)
  return (
    <div>
      <Title align={"left"} title={"Room Listings"} subTitle={"Chào mừng bạn đến với trung tâm quản lý hệ thống phòng nghỉ. Tại đây, bạn có thể dễ dàng bao quát toàn bộ danh sách phòng, từ trạng thái sẵn sàng đến các tiện ích đi kèm. Hãy sử dụng các công cụ lọc và tìm kiếm thông minh để tối ưu hóa việc kiểm soát số lượng, cập nhật giá thành và chỉnh sửa thông tin chi tiết, giúp quy trình vận hành khách sạn của bạn luôn mượt mà và chuyên nghiệp nhất."} />

      <p className='text-gray-600 mt-8'>All Rooms</p>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
        <table className='w-full' >
            <thead>
                <tr>
                  <th className='py-3 px-4 text-gray-500 font-medium'>
                      UserName
                  </th>
                  
                    <th className='py-3 px-4 text-gray-500 font-medium'>
                      Facility
                  </th>

                    <th className='py-3 px-4 text-gray-500 font-medium'>
                      Price /Night
                  </th>

                    <th className='py-3 px-4 text-gray-500 font-medium'>
                      Action 
                  </th>
                </tr>
            </thead>

            <tbody className='text-sm'>
              {
                  rooms.map((item,index)=>(
                    <tr key={index}> 
                        <td className='py-3 px-4 text-gray-600 border-t border-gray-300'>
                          {item.roomType}
                        </td>

                         <td className='py-3 px-4 text-gray-600 border-t border-gray-300'>
                          {item.amenities.join(" ,")}
                        </td>

                         <td className='py-3 px-4 text-gray-600 border-t border-gray-300'>
                          {item.pricePerNight}
                        </td>

                         <td className='py-3 px-4 border-t border-gray-300 text-red-300'>
                          <label htmlFor="" className='relative inline-flex items-center cursor-pointer text-gray-300 gap-3'>

                              <input type='checkbox' className='sr-only peer' checked={item.isAvailable}  />

                              <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'>
                                

                              </div>

                              <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                          </label>
                        </td>
                    </tr>
                  ))
              }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom
