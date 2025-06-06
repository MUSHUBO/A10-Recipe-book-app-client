import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner01 from '../../assets/banner-01.jpg';
import banner02 from '../../assets/banner-02.jpg';
import banner03 from '../../assets/banner-03.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='my-3'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                speed={1000}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full cursor-pointer rounded-xl"
            >
                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={banner02} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={banner01} alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='max-h-[83vh] w-full mx-auto' src={banner03} alt="Banner 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;