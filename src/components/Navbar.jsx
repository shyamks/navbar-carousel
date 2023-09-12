import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.css';
import { useClickAway } from '@uidotdev/usehooks';

const Navbar = () => {

  const [showNumberOfNavBarItems, setShowNumberOfNavBarItems] = useState(6);
  const [show, setShow] = useState(false);
  const elementRef = useRef(null);

  const tabNames = ['HOME', 'ELECTRONICS', "BOOKS", 'MUSIC', 'MOVIES', 'CLOTHING', 'GAMES', 'FURNITURE', 'ELECTRONICS', 'TRAVEL', 'BOTANICAL'];

  useEffect(() => {
    const element = elementRef?.current;

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const navBarWidth = parseInt((entries[0].contentRect.width - 128 - 180 - 300));
      setShowNumberOfNavBarItems(parseInt(navBarWidth/ 120) - 1)
    });

    observer.observe(element);
    setShowCarousel(true);
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

  console.log(finalTabNameShowing, 'final')
  return (
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
                        <img className={styles.highlightTickIcon} alt="" src="/check.svg" />
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
          <input type="text" className={styles.searchSomething} placeholder='Search something'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;