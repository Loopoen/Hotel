import { AppWindowMac, MapIcon, Star } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AllHotel = () => {
    const {navigate, axios} = useContext(AppContext)
    const [hotelData, setHotelData] = useState([])


    const fetchOwnerHotel = async()=>{
        try{
            const {data} = await axios.get("/api/hotel/get")

            if(data.success){
                setHotelData(data.hotels)
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    const deleteHotel = async (id)=>{
        try{
            const {data} = await axios.delete(`/api/hotel/delete/${id}`)
            if(data.success){
                toast.success(data.message)
                fetchOwnerHotel()
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchOwnerHotel()
    }, [])


    console.log(hotelData)
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-300 p-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='mb-8 flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl shadow-xl p-6 '>
                <h1 className='text-4xl font-bold text-gray-800 mb-2'>Hotel Colection</h1>

                <p className='text-gray-600 ml-3 text-sm'>Khám phá chỗ ở trên thế giới</p>

                <button className='bg-primary ml-3 text-white px-6 py-1 rounded-md cursor-pointer' onClick={()=>navigate("/owner/register-hotel")}>Register Hotel</button>

            </div>

            <div className='bg-white rounded-xl shadow-xl overflow-hidden'>
                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='bg-gradient-to-r from-blue-100 to indigo-200 text-white'>
                            <tr>
                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Hotel 
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Location
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Hotel Owner
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Contact
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Rating
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Price/Night
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Amentities
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-gray-100 '>
                            {
                                hotelData.map((item, index)=>(
                                    <tr key={item._id} className={`hover:bg-blue-100 transition-all duration-200 ${index % 2=== 0 ? "bg-white": "bg-gray-50"}`}>
                                            <td className='px-6 py-6 flex items-center space-x-5 '>
                                                <div >
                                                <div>
                                                    <img src={`http://localhost:4000/images/${item.image}`} className='w-20 h-16 rounded-xl object-cover shadow-md'/>
                                                </div>

                                              

                                                <div>
                                                    <h3 className='text-lg mt-1 text-gray-800 '>
                                                        {item.hotelName}
                                                    </h3>                                            
                                                </div>

                                            </div>

                                            
                                            </td>

                                            <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                                    <MapIcon className='w-4 h-4 text-gray-400 mt-1 flex-shrink-0 '/>

                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.hotelAddress}
                                                    </span>
                                                </div>
                                            </td>

                                             <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                                 

                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.owner.name}
                                                    </span>
                                                </div>
                                            </td>
                                            
                                             <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                                   

                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.contactNumber }
                                                    </span>
                                                </div>
                                            </td>

                                             <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                             
                                                    <Star className='text-yellow-400 w-4 h-4'/>
                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.rating}
                                                    </span>
                                                </div>
                                            </td>

                                             <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                             
                                                    
                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.price}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className='py-6 px-6'>
                                                    {
                                                        item.amenities.split(",").map((amentity, index)=>(
                                                            <span key={index} className='px-2 py-1 ml-1 bg-blue-100 text-blue text-xs rounded-full'>
                                                                {amentity}
                                                            </span>
                                                        ))
                                                    }
                                                </div>
                                            </td>

                                            <td>
                                                <button onClick={()=>deleteHotel(item._id)} className='bg-red-300 text-white py-1 px-4 rounded-full cursor-pointer'>
                                                    Delete
                                                </button>
                                            </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AllHotel