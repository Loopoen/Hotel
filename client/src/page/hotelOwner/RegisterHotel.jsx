import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const RegisterHotel = () => {
    const [data, setData] = useState({
        hotelName:"",
        hotelAddress:"",
        rating:"",
        price:"",
        amentities:"",
        image:null
    })

    const handleChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const [filter, setFilter] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleImageChange = (e)=>{
        const selectdFile = e.target.files[0]
        setFilter(selectdFile)
        setData({...data, image:selectdFile})

        if(selectdFile){
            const imageUrl = URL.createObjectURL(selectdFile)
            setPreview(imageUrl)
        }
    }

    const {axios, navigate} = useContext(AppContext)

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const formData = new FormData()

        formData.append("hotelName", data.hotelName)
        formData.append("hotelAddress", data.hotelAddress)
        formData.append("price", data.price)
        formData.append("rating", data.rating)
        formData.append("amenities", data.amentities)
        formData.append("image", data.image)

        try{
            const {data} = await axios.post("/api/hotel/register", formData)

            if(data.success){
                toast.success(data.message)
                navigate("/owner")
            }
            else{
                toast.error(data.message)
            }
            
        }
        catch(err){
            toast.error(err.message)
        }

        console.log(data)
    }
    return (

        <div className="py-10 flex flex-col justify-between bg-white">
            <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Hotel Image</p>
                    
                    <div className="w-full py-4">
                        {preview && (
                           <div className="mb-3 flex justify-center "> 
                                <img src={preview} className="w-24 h-24 object-cover rounded shadow"/>

                              
                           </div>
                        )}

                          <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-500 filter:mr-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" >Hotel Name</label>
                    <input id="product-name" name="hotelName" value={data.hotelName} onChange={handleChange} type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" >Hotel Address</label>
                    <textarea name="hotelAddress" value={data.hotelAddress} onChange={handleChange}  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>

                  <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" >Amentities</label>
                    <textarea name="amentities" value={data.amentities} onChange={handleChange}    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>

                  <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" >Rating</label>
                        <input id="product-rating" name="rating" value={data.rating} onChange={handleChange} type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                        
                </div>
             
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" >Price</label>
                        <input id="product-price" name="price" value={data.price} onChange={handleChange} type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                        
                </div>
                <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">Register Hotel</button>
            </form>
        </div>
    );
};

export default RegisterHotel