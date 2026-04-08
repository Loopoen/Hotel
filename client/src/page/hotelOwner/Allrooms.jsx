import { AppWindowMac, MapIcon, Star } from 'lucide-react'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const AllRooms = () => {
    const {roomData, navigate} = useContext(AppContext)
    console.log(roomData)
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-300 p-6'>
        <div className='max-w-7xl mx-auto '>
            <div className='mb-8 flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl shadow-xl p-6 '>
                <h1 className='text-4xl font-bold text-gray-800 mb-2'>Your All Rooms</h1>

                <p className='text-gray-600 ml-3 text-sm'>Manage your rooms here</p>

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
                                   Room Type
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Location
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Rating
                                </th>

                                <th className='px-6 py-4 text-left text-sm font-semibold uppercase text-gray-600 tracking-wider'>
                                   Price /Night
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
                                roomData.map((item, index)=>(
                                    <tr key={item._id} className={`hover:bg-blue-100 transition-all duration-200 ${index % 2=== 0 ? "bg-white": "bg-gray-50"}`}>
                                            <td className='px-6 py-6 flex items-center space-x-5 '>
                                                <div >
                                                <div>
                                                    <img src={item.images[0]} className='w-20 h-16 rounded-xl object-cover shadow-md'/>
                                                </div>

                                              

                                                <div>
                                                    <h3 className='text-lg mt-1 text-gray-800 '>
                                                        {item.hotel.name}
                                                    </h3>                                            
                                                </div>

                                            </div>

                                            
                                            </td>

                                            <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                                  

                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.roomType}
                                                    </span>
                                                </div>
                                            </td>


                                            

                                             <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                                 

                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.hotel.address}
                                                    </span>
                                                </div>
                                            </td>

                                             <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                             
                                                    <Star className='text-yellow-400 w-4 h-4'/>
                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.hotel.rating}
                                                    </span>
                                                </div>
                                            </td>

                                              <td className='px-6 py-6 '>
                                                <div className='flex items-start space-x-2'>
                                             
                                                    
                                                    <span className='text-gray-600 text-sm leading-relaxed'>
                                                        {item.hotel.price}
                                                    </span>
                                                </div>
                                            </td>

                                             

                                            
                                              <td>
                                                <div className='py-6 px-6'>
                                                    {
                                                        item.hotel.amenities.slice(0,3).map((amentity, index)=>(
                                                            <span key={index} className='px-2 py-1 ml-1 bg-blue-100 text-blue text-xs rounded-full'>
                                                                {amentity}
                                                            </span>
                                                        ))
                                                    }
                                                </div>
                                            </td>
                                            

                                           

                                         
                                            <td>
                                                <button className='bg-red-300 text-white py-1 px-4 rounded-full cursor-pointer'>
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

export default AllRooms