import React from "react";
import aboutImg from "../assets/heroImg.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="pt-24">

      {/* HERO */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <img
          src={aboutImg}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hotel của Oanh
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Nơi mỗi chuyến đi trở thành một kỷ niệm đáng nhớ
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <section className="px-6 md:px-16 lg:px-24 py-16 grid md:grid-cols-2 gap-12 items-center">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/dLl4PZtxia8?si=fSTnOAlUVnQXs0JD&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Câu chuyện của chúng tôi
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Hotel của Oanh được xây dựng với mong muốn mang đến một không gian
            nghỉ dưỡng ấm cúng, hiện đại và gần gũi cho mọi du khách. 
            Chúng tôi tin rằng mỗi chuyến đi không chỉ là hành trình khám phá
            mà còn là cơ hội để bạn tận hưởng những khoảnh khắc thư giãn tuyệt vời.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Với đội ngũ nhân viên tận tâm và dịch vụ chất lượng cao,
            khách sạn của chúng tôi luôn đặt trải nghiệm của khách hàng
            lên hàng đầu. Từ phòng nghỉ sang trọng đến các tiện ích hiện đại,
            mọi chi tiết đều được chuẩn bị để mang lại cảm giác thoải mái
            và đáng nhớ nhất.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Dịch vụ của chúng tôi
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">
              Phòng nghỉ sang trọng
            </h3>
            <p className="text-gray-600">
              Không gian phòng được thiết kế hiện đại,
              mang đến sự thoải mái và riêng tư tuyệt đối.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">
              Ẩm thực đa dạng
            </h3>
            <p className="text-gray-600">
              Nhà hàng phục vụ nhiều món ăn đặc sắc
              từ địa phương đến quốc tế.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">
              Dịch vụ 24/7
            </h3>
            <p className="text-gray-600">
              Đội ngũ nhân viên luôn sẵn sàng hỗ trợ
              bạn mọi lúc trong suốt kỳ nghỉ.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Giá trị chúng tôi mang lại
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Chất lượng
            </h3>
            <p className="text-gray-600">
              Luôn đặt tiêu chuẩn dịch vụ cao nhất
              để đảm bảo trải nghiệm hoàn hảo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Sự tận tâm
            </h3>
            <p className="text-gray-600">
              Mỗi vị khách đều được phục vụ với sự
              quan tâm và chu đáo nhất.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Trải nghiệm
            </h3>
            <p className="text-gray-600">
              Tạo nên những khoảnh khắc đáng nhớ
              cho mỗi chuyến hành trình của bạn.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-black text-lg font-semibold mb-4 mt-10">
            Vị trí khách sạn
          </h3>

          <iframe
            src="https://www.google.com/maps?q=12+Nguyen+Van+Bao+Go+Vap+Ho+Chi+Minh&output=embed"
            className="w-full h-40 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      
      <footer>
        <Footer/>
      </footer>

    </div>
  );
};

export default About;