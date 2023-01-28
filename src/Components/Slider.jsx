import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

function Slider() {
    return (
        <>
            <Swiper className='swiper'
                direction={"vertical"}
                pagination={{
                  clickable: true,

                }}
                modules={[Pagination]}
            
            >
                <SwiperSlide className='swiper-slide'><img src="asset/image/bg.png" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="asset/image/bg.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="asset/image/bg-1.jpg" alt="" /></SwiperSlide>
                {/* <SwiperSlide className='swiper-slide'><img src="asset/image/bg-3.jpg" alt="" /></SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default Slider