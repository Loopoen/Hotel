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
import { Recomendation } from "./component/Recomendation"
import { LogIn } from "lucide-react"
import { Login } from "./component/Login"
import Signup from "./component/SignUp"
import { Toaster } from "react-hot-toast"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import AllHotel from "./page/hotelOwner/AllHotel"
import Booking from "./page/hotelOwner/Booking"
import Allrooms from "./page/hotelOwner/Allrooms"
import RegisterHotel from "./page/hotelOwner/RegisterHotel"






function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")
  const { owner } = useContext(AppContext)


  return (

    <div>
      {!isOwnerPath && <Navbar />}
      <Toaster />


      <div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetal />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/recomendation" element={<Recomendation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/owner" element={owner ? <Layout /> : <Login />} >
              <Route index element={owner ? <AllHotel /> : <Login />} />

            <Route path="register-hotel" element={owner ? <RegisterHotel/>: <Login/>}/>
          
            <Route path="rooms" element={owner ? <Allrooms /> : <Login />} />
            <Route path="add-room" element={owner ? <AddRoom /> : <Login />} />
            <Route path="bookings" element={owner ? <Booking /> : <Login />} />

          </Route>

        </Routes>

      </div>

      <Footer />
    </div>
  )
}

export default App
