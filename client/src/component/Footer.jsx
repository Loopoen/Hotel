import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      {/* TOP FOOTER */}
      <div className="px-6 md:px-16 lg:px-24 py-14 grid md:grid-cols-4 gap-10">

        {/* HOTEL INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Hotel của Oanh
          </h3>
          <p className="text-sm leading-relaxed">
            Khách sạn của Oanh mang đến không gian nghỉ dưỡng sang trọng,
            ấm cúng và đầy đủ tiện nghi. Chúng tôi luôn mong muốn mang đến
            trải nghiệm tuyệt vời nhất cho mỗi du khách.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Liên hệ
          </h3>

          <ul className="space-y-2 text-sm">
            <li>📍 12 Nguyễn Văn Bảo, Gò Vấp, TP.HCM</li>
            <li>📞 0909 123 456</li>
            <li>📧 hotelofoanh@gmail.com</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Liên kết nhanh
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/rooms">Phòng</Link></li>
            <li><Link to="/experience">Trải nghiệm</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Mạng xã hội
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>YouTube</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">

        <p>
          © {new Date().getFullYear()} Hotel của Oanh. All Rights Reserved.
        </p>

        <p className="mt-2">
          Designed with ❤️ for travelers who love comfort and memorable experiences.
        </p>

      </div>

    </footer>
  );
};

export default Footer;