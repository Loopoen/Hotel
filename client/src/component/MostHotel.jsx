import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MostHotel = () => {
    const {hotelData} = useContext(AppContext)
  return (
    <div className='py-16'>
            <h1 className='text-heading text-3xl font-semibold text-center mx-auto'>
                Most Picked Hotel
            </h1>

            <p className='text-paragraph text-sm text-center'>Khám phá khách sạn tốt nhật chúng tôi dành cho bạn</p>

            <div className='flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto'>
                {
                    hotelData.map((item,idnex)=>(
                        <div key={idnex} className='relative group rounded-lg overflow-hidden cursor-pointer'>
                            <img src={item.image} className='size-56 object-cover object-top'/>

                            <div className='absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100  transition-all duration-500 '>
                                <h1 className='text-lg'>{item.name}</h1>
                                <p className='text-sm'>{item.address}</p>
                                <h1 className='text-lg'>{item.price}</h1>
                            </div>
                        </div>

                        
                    ))
                }
            </div>

    </div>
  )
}

export default MostHotel