import React from 'react'
import calenderIcon from "../assets/calenderIcon.svg"
import searchIcon from "../assets/search.svg"

export const cities = [
  "Dubai",
  "Singapore",
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Bangkok",
  "Hong Kong",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Toronto",
  "Sydney",
  "Melbourne",
  "Seoul",
  "Beijing",
  "Shanghai",
  "Kuala Lumpur",
  "Jakarta",
  "Bali",
  "Rome",
  "Barcelona",
  "Madrid",
  "Berlin",
  "Amsterdam",
  "Vienna",
  "Prague",
  "Budapest",
  "Istanbul",
  "Athens",
  "Lisbon",
  "Zurich",
  "Geneva",
  "Doha",
  "Abu Dhabi",
  "Riyadh",
  "Cairo",
  "Cape Town",
  "Mumbai",
  "Delhi",
  "Hanoi",
  "Ho Chi Minh City"
];


const Hero = () => {

  
  


  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImg.jpg")] bg-no-repeat bg-cover bg-center h-screen'>

       <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-3xl">

        <p className="inline-block bg-[#E6B325]/80 text-black font-medium px-4 py-1.5 rounded-full text-sm">
          Khách sạn của Oanh
        </p>

        <h1 className="mt-6  md:text-2xl lg:text-3xl font-bold leading-tight max-w-xl ">
          Nếu ánh mắt bạn đã chạm vào nơi này,
          chúng tôi hy vọng những khung cảnh
          tại khách sạn sẽ ở lại mãi
          trong ký ức của bạn.
        </h1>

        <p className="mt-6 text-gray-200  leading-relaxed  text-sm max-w-130">
          Khách sạn của Oanh mang đến không gian nghỉ dưỡng ấm cúng và sang trọng,
          nơi mỗi chi tiết đều được chăm chút để tạo nên trải nghiệm trọn vẹn.
          Với vị trí thuận tiện và dịch vụ tận tâm, chúng tôi mong muốn trở thành
          điểm dừng chân lý tưởng cho hành trình của bạn.
        </p>

        <form className=' mt-5 bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                   <img src={calenderIcon} className='h-5 w-5'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />

                <datalist id='destinations'>{cities.map((city, index)=>(
                  <option value={city} key={index}/>
                ))}</datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <img src={searchIcon} className='w-5 h-5'/>
                <span>Search</span>
            </button>
        </form>

      </div>
    </div>
  )
}

export default Hero