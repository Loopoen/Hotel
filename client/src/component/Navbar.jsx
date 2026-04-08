import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.svg"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import searchIcon from "../assets/search.svg"
import menuIcon from "../assets/menuIcon.svg"
import closeIcon from "../assets/closeIcon.svg"
import Profile from "../assets/profile.jpeg"

import { AppContext } from "../context/AppContext.jsx"
import toast from "react-hot-toast";

const BookingIcon = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" color="black" stroke="black">
            <path d="m2,9h8.023c.717-.949,1.758-1.634,2.961-1.888v-.112H2v-2c0-.551.449-1,1-1h15c.552,0,1,.449,1,1v2h-3.992v.111c1.206.252,2.25.938,2.969,1.889h1.023v6.765l2,.747V5c0-1.654-1.346-3-3-3h-2V0h-2v2h-7V0h-2v2h-2c-1.654,0-3,1.346-3,3v15h3.116c.146-.712.456-1.391.916-2h-2.032v-9Z" />
            <path d="m17,17.152v-5.045c0-1.516-1.076-2.834-2.504-3.066-.88-.144-1.768.103-2.439.674-.672.571-1.057,1.404-1.057,2.286v7.563l-1.014-.808-.003.004c-1.21-1.072-3.064-.997-4.174.191-1.13,1.208-1.066,3.11.13,4.23l.849.818h2.881l-2.352-2.268c-.403-.378-.424-1.013-.046-1.416.375-.402,1.008-.421,1.41-.048.02.019,4.32,3.443,4.32,3.443v-11.712c0-.294.129-.572.353-.762.228-.193.52-.271.822-.224.463.076.825.556.825,1.093v6.433l7,2.615v2.845h2v-4.232l-7-2.615Z" />
        </svg>
    )
}

const Navbar = () => {

    const { navigate, user, setUser } = useContext(AppContext)
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Recomendation', path: '/recomendation' },
        { name: 'About', path: '/about' },
    ];






    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation()

    const logout = async()=>{
        setUser(false)
        toast.success("logout thanh cong")
    }

    useEffect(() => {
        if (location.pathname != "/") {
            setIsScrolled(true)

            return;
        }
        else {
            setIsScrolled(false)
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);


    return (


        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} className="w-32 h-14" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button onClick={() => navigate("/owner")} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                    DashBoard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={searchIcon} alt="search" className={`${isScrolled && 'invert'} h-7 w-7 transition-all duration-700 `} />




                {
                    user ? (
                            <div className="relative group inline-block">
                                <img src={Profile} className="w-12 h-12 rounded-full" />


                                <div className="absolute right-0 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-600 z-50">
                                    <ul className="py-2">
                                        <li className="block px-4 py-2 text-sm hover:text-gray-600">
                                            <Link to={"my-bookings"}>My booking</Link>
                                        </li>

                                        <li onClick={logout} className="block px-4 py-2 text-sm hover:text-gray-600">
                                            <Link >Logout</Link>
                                        </li>
                                    </ul>

                            </div>
                            </div>

                            
                    ) : (
                        <button onClick={() => navigate("/login")} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                            Login
                        </button>
                    )
                }


            </div>



            {/* Mobile Menu Button */}

            <div className="flex items-center gap-3 md:hidden">


                {

                }
                <img src={menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isScrolled && 'invert'} h-7 w-7 transition-all duration-700 `} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={closeIcon} className="h-6 w-6" />
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                {user && <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all" onClick={() => navigate("/owner")}>
                    DashBoard
                </button>}

               {
                    user ? (
                            <div className="relative group inline-block">
                                <img src={Profile} className="w-12 h-12 rounded-full" />


                                <div className="absolute right-0 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-600 z-50">
                                    <ul className="py-2">
                                        <li className="block px-4 py-2 text-sm hover:text-gray-600">
                                            <Link to={"my-bookings"}>My booking</Link>
                                        </li>

                                        <li onClick={logout} className="block px-4 py-2 text-sm hover:text-gray-600">
                                            <Link >Logout</Link>
                                        </li>
                                    </ul>

                            </div>
                            </div>

                            
                    ) : (
                        <button onClick={() => navigate("/login")} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                            Login
                        </button>
                    )
                }


            </div>
        </nav>

    );
}

export default Navbar