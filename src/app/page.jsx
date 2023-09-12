'use client';

import Image from 'next/image'
import styles from './page.module.css'
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
import Navbar from '@/components/Navbar';
import { CAROUSEL_EFFECT, CAROUSEL_EFFECT_CONFIG, CAROUSEL_ITEMS } from '@/components/constants';

const HomePage = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setShowCarousel(true);
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.featuredProductsParent}>
          <div className={styles.featuredProducts}>Featured Products</div>
          <div className={styles.exploreAndDiscover}>
            Explore and discover a variety of products
          </div>
        </div>
        <div className={styles.groupParent}>
          <Swiper
            effect={CAROUSEL_EFFECT}
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
            coverflowEffect={CAROUSEL_EFFECT_CONFIG}
            modules={[EffectCoverflow, Pagination, Navigation, Virtual]}
          >
            {CAROUSEL_ITEMS.map((item, index) => {
              return (
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover' }} virtualIndex={index} key={item.title + index}>
                  {({ isActive }) => (
                    <div style={{position: 'relative'}}>
                      <Image
                        className={styles.frameChild}
                        alt={`Carousel item number ${index+1}`}
                        width={807}
                        height={567}
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
  );
};

export default HomePage;
