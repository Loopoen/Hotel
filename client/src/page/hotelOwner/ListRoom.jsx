import React, { useState } from 'react'
import { roomsDummyData } from '../../component/FeatureDestination'
import Title from '../../component/Title'

const ListRoom = () => {
    const [rooms, setRooms] = useState(roomsDummyData)
  return (
    <div>
      <Title align={"left"} title={"Room Listings"} subTitle={"Chào mừng bạn đến với trung tâm quản lý hệ thống phòng nghỉ. Tại đây, bạn có thể dễ dàng bao quát toàn bộ danh sách phòng, từ trạng thái sẵn sàng đến các tiện ích đi kèm. Hãy sử dụng các công cụ lọc và tìm kiếm thông minh để tối ưu hóa việc kiểm soát số lượng, cập nhật giá thành và chỉnh sửa thông tin chi tiết, giúp quy trình vận hành khách sạn của bạn luôn mượt mà và chuyên nghiệp nhất."} />

      <p className='text-gray-600 mt-8'>All Rooms</p>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full' >

        </table>
      </div>
    </div>
  )
}

export default ListRoom
