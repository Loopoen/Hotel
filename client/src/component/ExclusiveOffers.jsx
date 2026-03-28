import React from 'react'
import Title from './Title'
import arrowIcon from "../assets/angle-circle-right.svg"
import exclusiveOfferCardImg1 from "../assets/ExclusiveImg1.jpg"
import exclusiveOfferCardImg2 from "../assets/ExclusiveImg2.jpg"
import exclusiveOfferCardImg3 from "../assets/ExclusiveImg3.jpg"


export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]


const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <Title align='left' title={"Ưu đãi độc quyền"} subTitle={"Sang trọng & Độc bản: Đánh thức mọi giác quan với đặc quyền nghỉ dưỡng dành riêng cho chủ nhân xứng tầm."}/>

            <button >

                Xem tất cả ưu đãi
                <img src={arrowIcon} className='hover:translate-x-1 transition-all w-6 h-6' />
            </button>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 ml-10'>
            {
                exclusiveOffers.map((item)=>(
                    <div key={item._id} className=' w-120 h-62 group relative flex flex-col items-start justify-between gap-1 pt-12 px-4 rounded-xl text-gray-100 bg-no-repeat bg-cover bg-center md:pt-1'
                    style={{backgroundImage:`url(${item.image})`}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <p className='px-3 py-2 absolute top-4 left-4 text-xs bg-white rounded-full text-gray-900'>Giảm {item.priceOff}%</p>

                        <div className='top-20 left-6 absolute '>

                            <p className='text-2xl font-medium '>{item.title}</p>
                            <p>{item.description}</p>
                            <p className='text-xs text-white/70'>Khởi hành {item.expiryDate}</p>

                             <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'>

                                Xem Ưu Đãi
                                <img className='invert hover:translate-x-2 w-5 h-5 transition-all' src={arrowIcon}/>
                            </button>
                        </div>

                       

                    </div>
                    
                ))
            }
        </div>

        
    </div>
  )
}

export default ExclusiveOffers