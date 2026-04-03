import React, { useState } from 'react'
import Title from '../../component/Title'
import UploadIcon from "../../assets/cloud-upload.svg"

const AddRoom = () => {
    const [image, setImange] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })

    const [input, setInputs] = useState({
        roomType: "",
        pricePerNight: 0,
        amenities: {
            'Free WiFi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false
        }
    })
    return (
        <div>
            <form>
                <Title align={"left"} title={"Add Rooms"} subTitle={"Tính năng Add Room là công cụ giúp bạn mở rộng quy mô kinh doanh chỉ trong vài thao tác đơn giản. Tại giao diện này, bạn có thể dễ dàng cập nhật đầy đủ thông tin từ tên phòng, loại hình dịch vụ đến giá cả và hình ảnh thực tế. Việc thiết kế một biểu mẫu thêm phòng khoa học không chỉ giúp quản lý dữ liệu chính xác mà còn đảm bảo các phòng mới được hiển thị bắt mắt, sẵn sàng tiếp cận khách hàng ngay lập tức."} />

                <p className='text-gray-800 mt-10'>Images</p>

                <div className='grid grid-cols-2 sm:flex gap-4 my-12 flex-wrap'>
                    {
                        Object.keys(image).map((key) => (
                            <label htmlFor={`roomImage${key}`} key={key}>
                                <div className='px-9 py-5 bg-gray-900/10 ' >
                                    <img className='w-6 h-6 cursor-pointer opacity-75' src={image[key] ? URL.createObjectURL(image[key]) : UploadIcon} />
                                </div>
                                <input type='file' accept='image/*' id={`roomImage${key}`} hidden onChange={e => setImange({ ...image, [key]: e.target.files[0] })} />
                            </label>
                        ))
                    }
                </div>

                <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4 '>
                    <div className='flex-1 max-w-48'>
                        <p className=''>Room Type</p>
                        <select  className='border opacity-65 border-gray-300 mt-1 rounded p-2 w-full' onClick={e=>setInputs({...input,  roomType: e.target.value})} >
                            <option value={""}>Select Room Type</option>
                            <option value={"Single Bed"}>Single Bed</option>
                            <option value={"Double Bed"}>Double Bed</option>
                            <option value={"Normal Room"}>Normal Room</option>
                            <option value={"President Room"}>President Room</option>
                            <option value={"Family Room"}>Family Room</option>
                            <option value={"Luxury Room"}>Luxury Room</option>
                        </select>

                    </div>

                    <div>
                        <p className=' text-gray-800'>
                            Price <span className='text-xs'>/night</span>
                        </p>

                        <input type='number' placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={input.pricePerNight} onChange={e=>{
                            setInputs({...input, pricePerNight:e.target.value})
                        }}/>
                    </div>
                </div>

                <p className='flex flex-col flex-wrap mt-1 flex-gray-400 max-w-sm'>Amentities</p>

                <div className='mt-2'>
                    {
                        Object.keys(input.amenities).map((amenity, index)=>(
                            <div>
                                <input type='checkbox' id={`amentities${index +1 }`} checked={input.amenities[amenity]} onChange={()=>setInputs({
                                    ...input, amenities:{...input.amenities, [amenity]: !input.amenities[amenity]}
                                }) }/>
                                <label htmlFor={`amentities${index + 1}`} className='ml-2'>{amenity}</label>    
                            </div>
                        ))
                    }
                </div>

                <button className='bg-primary text-white px-8 py-2 rounded mt-9'>
                    Add Room
                </button>
            </form>


        </div>
    )
}

export default AddRoom
