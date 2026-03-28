import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./page/Home"
import About from "./component/About"
import AllRooms from "./page/AllRooms"
import Footer from "./component/Footer"
import RoomDetal from "./component/RoomDetal"
import MyBooking from "./page/MyBooking"




function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")
  

  return (
    <div>
      { !isOwnerPath && <Navbar/>}

      <div className="min-h-[70vh]">
        <Routes>

          <Route path ="/" element = {<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/rooms" element={<AllRooms/>} />
          <Route path="/rooms/:id" element={<RoomDetal/>} />
          <Route path="/my-bookings" element={<MyBooking/>} />
        </Routes>

      </div>

      <Footer/>
    </div>
  )
}

export default App
