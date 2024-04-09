import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-2xl w-full md:h-[550px]">
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Banner;
import banner1 from '../../src/assets/banner1.jpeg'
import banner2 from '../../src/assets/banner2.jpeg'
import banner3 from '../../src/assets/banner3.jpeg'
