import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from './FeatureDestination'
import StarRating from './StarRating'
import locationIcon from "../assets/land-layer-location.svg"
import { facilityIcons } from '../page/AllRooms'
import homeIcon from "../assets/home.svg"
import badgeIcon from "../assets/badge-check.svg"
import locationFilledIcon from "../assets/land-layer-location.svg"
import heartIcon from "../assets/heart.svg"


export const roomCommonData = [
    { icon: homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

const RoomDetal = () => {

    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setImage(room.images[0])
    }, [])
    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl'>{room.hotel.name}

                    <span className='text-sm'>({room.roomType})</span>
                </h1>
                <p className='text-xs py-2 px-3 text-white bg-orange-500 rounded-full'>Giảm giá 20%</p>

            </div>

            <div className='flex items-center gap-1 mt-5'>
                <StarRating />
                <p className='ml-2'>1000+ lượt đánh giá</p>
            </div>


            <div className='flex items-center gap-1 text-gray-400 mt-2'>
                <img src={locationIcon} className='w-5 h-5' />
                <span>{room.hotel.address}</span>
            </div>

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>

                <div className='w-100 h-50'>

                    <img src={image} className='w-full rounded-2xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {
                        room?.images.length > 1 && room.images.map((item, index) => (
                            <img src={item} onClick={() => setImage(item)} className={`w-full h-50 rounded-xl shadow-md object-cover cursor-pointer ${image === item && 'outline-3 outline-gray-500'}`} />
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between mt-20'>
                <div className='flex flex-col'>

                    <h1 className='text-3xl md:text-4xl '>
                        Trải Nghiệm Sang Trọng Không Bao Giờ Quên
                    </h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4 '>

                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-3  bg-gray-200 rounded-lg'>

                                <img src={facilityIcons[item]} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>


                        ))}
                    </div>
                </div>

                <div>

                    <p className='text-2xl font-medium'>${room.pricePerNight}/Night</p>
                </div>

            </div>

            <form className='flex flex-col md:flex-row items-start md:items-center  justify-between  bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.2)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor='checkInDate' className='font-medium  '>Check In</label>
                        <input type='date' id='checkInDate' placeholder='Check In' className='w-full rounded border-gray-300 mt-1.5 outline-none  ' required />

                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor='checkOutDate' className='font-medium  '>Check Out</label>
                        <input type='date' id='checkOutDate' placeholder='Check Out' className='w-full rounded border-gray-300 mt-1.5 outline-none   ' required />

                    </div>

                    <div className='w-px h-15 bg-gray-300 max-md:hidden'></div>


                    <div className='flex flex-col'>
                        <label htmlFor='checkOutDate' className='font-medium  '>Guest</label>
                        <input type='number' id='guest' placeholder='0' className='w-full rounded border-gray-300 mt-1.5 outline-none   ' required />

                    </div>


                </div>

                <button className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer '>
                    Book Now
                </button>
            </form>

            <div className='mt-25 space-y-5'>

                {
                    roomCommonData.map((spec, index) => (
                        <div className='flex items-start gap-2'>
                            <img src={spec.icon} className='w-5 h-5' />

                            <div>
                                <p className='text-base'>
                                    {spec.title}
                                </p>

                                <p className='text-gray-500'>
                                    {spec.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='max-w-3xl border-y my-15 py-10 text-gray-500'>
                <p>Bước qua cánh cửa, bạn sẽ ngay lập tức cảm nhận được sự tách biệt hoàn toàn với nhịp sống hối hả bên ngoài. Căn phòng là sự giao thoa tinh tế giữa phong cách kiến trúc đương đại và nét ấm cúng cổ điển, với tông màu trung tính chủ đạo điểm xuyết những chi tiết gỗ trầm mặc.

                    Điểm nhấn đắt giá nhất chính là khung cửa kính chạm trần, nơi ánh nắng ban mai dịu dàng rót mật xuống chiếc giường vương giả với lớp đệm lông vũ mềm mại, hứa hẹn một giấc ngủ sâu trọn vẹn. Mỗi góc nhỏ, từ bộ trà gốm sứ thủ công đến hương tinh dầu oải hương thoang thoảng, đều được chăm chút tỉ mỉ để khơi gợi mọi giác quan. Tại đây, xa hoa không chỉ nằm ở những trang bị tiện nghi hiện đại nhất, mà còn ở cảm giác thư thái tuyệt đối khi bạn được là chính mình trong một không gian riêng tư, đẳng cấp.</p>
            </div>

            <div className='flex flex-col itmes-center gap-4'>
                <div>
                    <img src={room.hotel.owner.image} alt="" className='w-14 h-14 md:h-18 md:w-18 rounded-full' />

                    <div>
                        <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
                        
                        <div className='flex items-center mt-2'>
                            <StarRating />
                        <p className='ml-3'>200+ Lượt xem</p>
                        </div>
                    </div>

                </div>

               
            </div>
             <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Liên hệ</button>

        </div>
    )
}

export default RoomDetal