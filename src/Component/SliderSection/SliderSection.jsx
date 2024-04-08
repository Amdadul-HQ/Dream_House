import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link, useLoaderData } from "react-router-dom";
  
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules

export default function SliderSection() {
    const albums = useLoaderData();
  return (
    <section className='h-[700px] max-w-screen-xl mx-auto'>
      <Swiper
        pagination={{
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >{
        albums.map( item => <SwiperSlide key={item.id} item={item} >
            <div className='w-full h-full rounded-2xl bg-no-repeat flex flex-col justify-center items-center' style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
                }}>
                    <h1 className='text-white font-bold text-6xl'>{item.estate_title}</h1>
                    <p className='w-[900px] text-gray-300 text-base font-light mt-5'>{item.description}</p>
                    <Link to={`/house/${item.id}`} className=" mt-3 backdrop-blur-3xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black  bg-gray-50 rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">View Details</span>
                    </Link>
            </div>
        </SwiperSlide> )
      }
      </Swiper>
    </section>
  );
}


