import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';



const SwiperBanner = () => {


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper

            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                // delay: 25000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper h-[100%] w-[100%]"
        >
            <SwiperSlide>
                <Image height={500} width={982} src="https://www.startech.com.bd/image/cache/catalog/home/banner/Uttara%20Sayed%20Grand%20Notice-982x500.png" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image height={500} width={982} src="https://www.startech.com.bd/image/cache/catalog/home/IMG-20231022-WA0004-982x500.jpg" alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image height={500} width={982} src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp" alt="" srcset="" />
            </SwiperSlide>


            <div className="autoplay-progress text-[#ef4a23]" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent} className='text-[#ef4a23;]'></span>
            </div>
        </Swiper>
    );
};

export default SwiperBanner;