import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";


const OurProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://heroic-toys-server.vercel.app/all-products')
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(err => console.error(err));
  }, []);


  return (
    <section className="pb-16 bg-base-100">
      <h1 className='text-center text-4xl md:text-8xl mb-8'>Our Products</h1>
      <div className="max-w">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            products.splice(0, 20).map(product => <SwiperSlide key={product._id}>
              <div className="card h-[70vh] bg-secondary shadow-xl">
                <figure><img className='duration-1000 hover:scale-150' src={product.image} alt="product image" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Rating: {product.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  );
};

export default OurProducts;
