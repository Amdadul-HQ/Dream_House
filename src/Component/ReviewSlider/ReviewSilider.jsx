import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import ReviewSection from '../ReviewSection/ReviewSection';



const ReviewSilider = ({review}) => {

    


    return (
        <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            review && review.map( (r,inx) => <SwiperSlide key={inx}><ReviewSection key={inx} r={r} /></SwiperSlide> )
        }
      </Swiper>
    </>
    );
};

export default ReviewSilider;