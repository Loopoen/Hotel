import { useContext, useEffect, useState } from "react";
import upload from "../../assets/cloud-upload.svg"
import { hotelsData } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddRoom = () => {
    const { axios, navigate } = useContext(AppContext)

    const [roomData, setRoomData] = useState({
        hotel: "",
        roomType: "",
        pricePerNight: "",
        description: "",
        images: [],
        amenities: "",
        isAvailable: true,
    })

    const handleChange = (e) => {


        setRoomData({ ...roomData, [e.target.name]: e.target.value })
    }


    const [preview, setPreview] = useState(null)

    const handleImageChange = (e, index) => {
        const file = e.target.files[0]
        if (file) {
            const updatedImage = [...roomData.images]
            updatedImage[index] = file;
            setRoomData({ ...roomData, images: updatedImage })
        }
    }


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

    useEffect(()=>{
        fetchOwnerHotel()
    }, [])

    console.log("hotel", hotelData);
    


    const handleSubmit = async (e) => {


        e.preventDefault()

        const formData = new FormData()

        formData.append("hotel", roomData.hotel)
        formData.append("roomType", roomData.roomType)
        formData.append("pricePerNight", roomData.pricePerNight)
        formData.append("description", roomData.description)
        formData.append("isAvailable", roomData.isAvailable)
        formData.append("amenities", roomData.amenities)

        for(let i = 0 ; i < roomData.images.length; i++){
            formData.append("images", roomData.images[i])
        }

        try{
            const {data} = await axios.post("/api/room/add", formData, {
                headers:{
                    "Content-Type" : "multipart/form-data"
                },
            })
            if(data.success){
                toast.success(data.message)
                navigate("/owner/rooms")
            }else{
                toast.error(data.message)
            }
        }
        catch(err){
            toast.error(err.message)
        }




        console.log(roomData)
    }
    return (

        <div className="py-10 flex flex-col justify-between bg-white">
            <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Rooms Image</p>

                    <div className="flex flex-wrap items-center gap-3 mt-2 ">
                        {Array(4).fill("").map((_, index) => (

                            <label key={index} htmlFor={`image${index}`}>
                                <input type="file" accept="image/*" id={`image${index}`} onChange={(e => handleImageChange(e, index))} hidden />

                                <img className="max-w-24 rounded-md cursor-pointer" src={roomData.images[index] ? URL.createObjectURL(roomData.images[index]) : upload} width={50} height={50} />
                            </label>


                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" >Room Type</label>
                    <input id="product-name" name="roomType" value={roomData.roomType} onChange={handleChange} type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" >Hotel Descripstion</label>
                    <textarea name="description" value={roomData.description} onChange={handleChange} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>

                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" >Room Amentities</label>
                    <textarea name="amenities" value={roomData.amenities} onChange={handleChange} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" >Available</label>
                        <input id="product-rating" name="isAvailable" value={roomData.isAvailable} onChange={handleChange} type="checkbox" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>

                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor=""  >
                        Select Hotel
                    </label>

                    <select name="hotel" value={roomData.hotel} onChange={handleChange} className="outline-none md:px-2.5 px-3 rounded border border-gray-500/40">
                        <option value={""}>
                            Select Hotel

                        </option>


                        {hotelData.map((item) => (
                            <option value={item._id}>

                                {item.hotelName}
                            </option>
                        ))}


                    </select>


                </div>

                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" >Price Per Night</label>
                        <input id="product-price" name="pricePerNight" value={roomData.pricePerNight} onChange={handleChange} type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>

                </div>
                <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">Add Room</button>
            </form>
        </div>
    );
};

export default AddRoom    