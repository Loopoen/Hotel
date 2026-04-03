import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./page/Home"
import About from "./component/About"
import AllRooms from "./page/AllRooms"
import Footer from "./component/Footer"
import RoomDetal from "./component/RoomDetal"
import MyBooking from "./page/MyBooking"
import HotelRegistration from "./component/HotelRegistration"
import Layout from "./page/hotelOwner/Layout"
import DashBoard from "./page/hotelOwner/DashBoard"
import AddRoom from "./page/hotelOwner/AddRoom"
import ListRoom from "./page/hotelOwner/ListRoom"




function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")
  

  return (
    <div>
      { !isOwnerPath && <Navbar/>}
      {false && <HotelRegistration/>}

      <div className="min-h-[70vh]">
        <Routes>

          <Route path ="/" element = {<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/rooms" element={<AllRooms/>} />
          <Route path="/rooms/:id" element={<RoomDetal/>} />
          <Route path="/my-bookings" element={<MyBooking/>} />
          <Route path="/owner" element={<Layout/>} >

            <Route index element={<DashBoard/>}/>
            <Route path="add-room" element={<AddRoom/>} />
            <Route  path="list-room" element={<ListRoom/>}/>
          </Route>
            
        </Routes>

      </div>

      <Footer/>
    </div>
  )
}

export default App
