'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "../components/stylesConfig";
import { Global } from "@emotion/core";
import { useCallback, useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Virtual, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import 'swiper/css/virtual';
import Paginate from '@/components/Paginate';
import Navbar from '@/components/NavBar';

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

const carouselItems = [
  { url: 'https://swiperjs.com/demos/images/nature-1.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-2.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-3.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-4.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-5.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-6.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-7.jpg', title: 'Modern Kitchen Utensils'},
  { url: 'https://swiperjs.com/demos/images/nature-8.jpg', title: 'Modern Kitchen Utensils'},
]

const MacBookPro162 = () => {

  const [showCarousel, setShowCarousel] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setShowCarousel(true);
  }, [])
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <div className={styles.macbookPro162}>
        <Navbar />
        <div className={styles.featuredProductsParent}>
          <div className={styles.featuredProducts}>Featured Products</div>
          <div className={styles.exploreAndDiscover}>
            Explore and discover a variety of products
          </div>
        </div>
        <div className={styles.groupParent}>
          <Swiper
            effect={"coverflow"}
            ref={sliderRef}
            grabCursor={true}
            speed={800}
            centeredSlides={true}
            init={false}
            loop={true}
            parallax={true}
            style={showCarousel ? { visibility: 'visible' } : { visibility: 'hidden' }}
            navigation={{
              nextEl: "rightIcon",
              prevEl: "leftIcon",
            }}
            slidesPerView={3}
            width={1600}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Virtual]}
          >
            {carouselItems.map((item, index) => {
              return (
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover' }} virtualIndex={index} key={item.title + index}>
                  {({ isActive, isNext }) => (
                    <div style={{position: 'relative'}}>
                      <img
                        className={styles.frameChild1}
                        alt=""
                        src={item.url}
                      />
                      {isActive ?(
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameContainer}>
                          <div className={styles.modernKitchenUtensilsWrapper}>
                            <div className={styles.modernKitchenUtensils}>
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>) : null}
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Paginate handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MacBookPro162;
