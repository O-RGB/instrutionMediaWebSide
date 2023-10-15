import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles

import React from "react";

import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface SwiperCustomProps extends SwiperProps {
  children?: React.ReactNode;
}

const SwiperCustom: React.FC<SwiperCustomProps> = ({ children, ...props }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default SwiperCustom;
