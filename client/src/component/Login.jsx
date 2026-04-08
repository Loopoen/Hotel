import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {toast} from "react-hot-toast"

export const Login = () => {

    const {user, setUser, navigate, setOwner} = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        toast.success("login thanh cong")
        setUser(true)
        setOwner(true)
        navigate("/")
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="max-w-96 mx-auto mt-50 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
                <h1 class="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
                <p class="text-gray-500 text-sm mt-2">Please sign in to continue</p>
                <div class="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                    </svg>
                    <input name='email' value={formData.email} onChange={onChangeHandler} type="email" placeholder="Email id" class="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
                </div>

                <div class="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                    </svg>
                    <input
                        name="password"
                        value={formData.password}
                        onChange={onChangeHandler}
                        type="password"
                        placeholder="Password"
                        className="bg-transparent text-gray-500 outline-none text-sm w-full h-full pl-2"
                    />
                </div>
                <div class="mt-5 text-left text-indigo-500">
                    <a class="text-sm" href="#">Forgot password?</a>
                </div>

                <button  type="submit" class="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                    Login
                </button>
                <p class="text-gray-500 text-sm mt-3 mb-11">Don’t have an account? {" "}
                    <Link to={"/signup"} className='text-primary'>
                        Sign up
                    </Link>
                </p>
            </form>

        </div>
    )
}

export default Login