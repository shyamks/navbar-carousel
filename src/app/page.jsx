'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/Slider';
import { useClickAway } from "@uidotdev/usehooks";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "../components/stylesConfig";
import { Global } from "@emotion/core";
import { useEffect, useRef, useState } from 'react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';


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


const tabNames = ['HOME', 'ELECTRONICS', "BOOKS", 'MUSIC', 'MOVIES', 'CLOTHING', 'GAMES', 'FURNITURE', 'ELECTRONICS', 'TRAVEL', 'BOTANICAL'];

const MacBookPro162 = () => {

  const [showNumberOfNavBarItems, setShowNumberOfNavBarItems] = useState(7);
  const [show, setShow] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef?.current;

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const navBarWidth = parseInt((entries[0].contentRect.width - 128 - 180 - 300));
      setShowNumberOfNavBarItems(parseInt(navBarWidth/ 120) - 1)
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [])

  const switchMore = () => {
    setShow(!show);
  }

  const dropDownRef = useClickAway((e) => {
    setShow(false);
  });

  const finalTabNameShowing = tabNames.slice(0, showNumberOfNavBarItems + 1);
  const moreTabNames = tabNames.slice(showNumberOfNavBarItems + 1);
  const moreProps = !show ? {
    onClick: () => {
      switchMore();
    },
  } : {};
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <div className={styles.macbookPro162}>
        <div className={styles.navigationBar} ref={elementRef}>
          <div className={styles.logo}>
            <img className={styles.intersectIcon} alt="" src="/intersect.svg" />
            <div className={styles.eComm}>E-COMM</div>
          </div>
          <div className={styles.rightTab}>
            <div className={styles.rightTab}>
              {finalTabNameShowing.map((tabName) => {
                return (
                  <div className={styles.tab1} key={tabName}>
                    <b className={styles.tabName}>{tabName}</b>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                );
              })}
                <div className={styles.tabMore} key={'MORE'}>
                  <b className={styles.tabName} {...moreProps}>MORE</b>
                  <img
                    {...moreProps}
                    className={styles.moreIcon}
                    alt=""
                    src="/chevrondown1.svg"
                  />
                  {show ? (
                  <div ref={dropDownRef} className={styles.permissionDropdown}>
                    <div className={styles.menuItems}>
                      {moreTabNames.map(tabName => {
                        return (
                          <div className={styles.inputDropdownMenuItem1}>
                            <div className={styles.content}>
                              <div className={styles.text}>{tabName}</div>
                            </div>
                            <img className={styles.searchIcon} alt="" src="/check.svg" />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  ) : null}
                </div>
                
            </div>
            <div className={styles.search}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.searchSomething}>Search something</div>
            </div>
          </div>
        </div>
        <div className={styles.featuredProductsParent}>
          <div className={styles.featuredProducts}>Featured Products</div>
          <div className={styles.exploreAndDiscover}>
            Explore and discover a variety of products
          </div>
        </div>
        <div className={styles.groupParent}>
          <Slider
            params={{
              effect: "coverflow",
              loop: true,
              centeredSlides: true,
              slidesPerView: 3,
              // modules:[EffectCoverflow],
              // initialSlide: 3,
              // slideActiveClass: "swiper-slide-active",
              // preventClicks: true,
              // preventClicksPropagation: true,
              // slideToClickedSlide: true,
              grabCursor: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: false
              },
              // breakpoints: {
              //   // when window width is <= 320px
              //   320: {
              //     slidesPerView: 3,
              //     spaceBetween: 10
              //   },
              //   // when window width is <= 480px
              //   480: {
              //     slidesPerView: 3,
              //     spaceBetween: 10
              //   },
              //   // when window width is <= 640px
              //   640: {
              //     slidesPerView: 3,
              //     spaceBetween: 10
              //   },
              //   1920: {
              //     slidesPerView: 3,
              //     spaceBetween: 10
              //   }
              // }
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MacBookPro162;
