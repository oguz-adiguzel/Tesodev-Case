import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewsCard from './NewsCard';

const News = () => {

    const newsData = [
        {
            id: 1,
            img: 'news-image.png',
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            date: '1h ago',
            writer: 'Troy Corlson'
        },
        {
            id: 2,
            img: 'news-image.png',
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            date: '1h ago',
            writer: 'Troy Corlson'
        },
        {
            id: 3,
            img: 'news-image.png',
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            date: '1h ago',
            writer: 'Troy Corlson'
        },
        {
            id: 4,
            img: 'news-image.png',
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            date: '1h ago',
            writer: 'Troy Corlson'
        },
        {
            id: 5,
            img: 'news-image.png',
            title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
            date: '1h ago',
            writer: 'Troy Corlson'
        }
    ]

    return (
        <>
            <p className='text-[32px] text-[#090A0A] font-bold ml-10'>Top News</p>
            <div className='flex'>
                <div className='w-[5%] flex justify-start items-center'>
                    <div id='prevProductSlider' className='w-12 h-12 rounded-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer'>
                        <img src='left-arrow.png' />
                    </div>
                </div>
                <div className='py-10 w-[90%]'>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: "#prevProductSlider",
                            nextEl: "#nextProductSlider",
                        }}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                            },
                            480: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                            },
                            768: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                          }}
                    >
                        {
                            newsData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <NewsCard item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='w-[5%] flex justify-end items-center'>
                    <div id='nextProductSlider' className='w-12 h-12 rounded-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer'>
                        <img src='right-arrow.png' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News