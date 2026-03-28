import React from 'react'
import ArrowIcon from "../assets/angle-circle-right.svg"
import Title from './Title'

const Letter = () => {
    return (

        <div class="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">

            <Title title={"Tham gia với chúng tôi"} subTitle={"Đăng ký nhận bản tin để trở thành người đầu tiên khám phá các cập nhật mới nhất, những ưu đãi đặc quyền và nguồn cảm hứng bất tận"}/>

            <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <input type="text" class="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" placeholder="Enter your email" />
                <button class="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">Subscribe

                    <img src={ArrowIcon} className='w-4 h-5 invert hover:translate-x-2 transition-all' />
                </button>
            </div>
            <p class="text-gray-500 mt-6 text-xs text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
        </div>


    )
}

export default Letter