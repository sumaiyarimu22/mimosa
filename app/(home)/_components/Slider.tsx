'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { data } from '@/data/SliderContents';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/libs/utils';

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)]'>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        grabCursor={true}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className='mySwiper h-full w-full'
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.heading} className='relative h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1920}
              height={1080}
              className='h-full w-full object-cover'
            />
            {/* <Overlay /> */}
            <div className='sp container absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-start justify-center gap-5 text-white'>
              <h1>{slide.heading}</h1>
              <p className='max-w-6xl'>{slide.subHeading}</p>
              {/* <Link
                href='/beauty-packages'
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                Browse Beauty Packages
              </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
