import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import banner1 from '../../assets/banner/banner-1.jpg';
import banner2 from '../../assets/banner/banner-2.jpg';
import banner3 from '../../assets/banner/banner-3.jpg';
import banner4 from '../../assets/banner/banner-4.jpg';


const Hero = () => {
  return (
    <section className="py-4 bg-base-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={banner1} alt="banner" />
          <div className="w-1/2 absolute top-[35%] right-20 text-right">
            <h3 className="text-2xl">Welcome To</h3>
            <h1 className="text-8xl my-4 font-bold">Heroic Toys</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque magnam eius nihil numquam facere aspernatur commodi odio? Mollitia nisi libero id ducimus magni sequi architecto, eum laborum totam ea.</p>
            <button className="btn btn-lg btn-primary font-extrabold mt-8">Shop Now <FaArrowRight className="ml-4" /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner2} alt="banner" />
          <div className="w-1/2 absolute top-[25%] left-20 text-secondary">
            <h3 className="text-2xl">Heroic Toys</h3>
            <h1 className="text-8xl my-4 font-bold">Find Your Action Figure</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque magnam eius nihil numquam facere aspernatur commodi odio? Mollitia nisi libero id ducimus magni sequi architecto, eum laborum totam ea.</p>
            <button className="btn btn-lg btn-primary font-extrabold mt-8">Shop Now <FaArrowRight className="ml-4" /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner3} alt="banner" />
          <div className="w-1/2 absolute top-[35%] right-[25%] text-center text-accent">
            <h3 className="text-2xl">Welcome To</h3>
            <h1 className="text-8xl my-4 font-bold">Heroic Toys</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque magnam eius nihil numquam facere aspernatur commodi odio? Mollitia nisi libero id ducimus magni sequi architecto, eum laborum totam ea.</p>
            <button className="btn btn-lg btn-primary font-extrabold mt-8">Shop Now <FaArrowRight className="ml-4" /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner4} alt="banner" />
          <div className="w-1/2 absolute top-[25%] left-20">
            <h3 className="text-2xl">Heroic Toys</h3>
            <h1 className="text-8xl my-4 font-bold">Find Your Action Figure</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque magnam eius nihil numquam facere aspernatur commodi odio? Mollitia nisi libero id ducimus magni sequi architecto, eum laborum totam ea.</p>
            <button className="btn btn-lg btn-primary font-extrabold mt-8">Shop Now <FaArrowRight className="ml-4" /></button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
