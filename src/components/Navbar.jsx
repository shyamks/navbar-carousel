import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.css';
import { useClickAway } from '@uidotdev/usehooks';
import { TAB_NAMES } from './constants';
import Image from 'next/image';

const Navbar = () => {
  const [showNumberOfNavBarItems, setShowNumberOfNavBarItems] = useState(6);
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

  const finalTabNameShowing = TAB_NAMES.slice(0, showNumberOfNavBarItems + 1);
  const moreTabNames = TAB_NAMES.slice(showNumberOfNavBarItems + 1);
  const moreProps = !show ? {
    onClick: () => {
      switchMore();
    },
  } : {};

  return (
    <div className={styles.navigationBar} ref={elementRef}>
      <div className={styles.logo}>
        <Image className={styles.intersectIcon} width={25} height={23} alt="" src="/intersect.svg" />
        <div className={styles.eComm}>{'E-COMM'}</div>
      </div>
      <div className={styles.rightTab}>
        <div className={styles.rightTab}>
          {finalTabNameShowing.map((tabName) => {
            return (
              <div className={styles.tab1} key={tabName}>
                <b className={styles.tabName}>{tabName}</b>
                <Image
                  className={styles.chevronDownIcon}
                  alt=""
                  width={20} height={20}
                  src="/chevrondown.svg"
                />
              </div>
            );
          })}
            <div className={styles.tabMore} key={'MORE'}>
              <b className={styles.tabName} {...moreProps}>{'MORE'}</b>
              <Image
                {...moreProps}
                className={styles.moreIcon}
                alt=""
                width={20} height={20}
                src="/chevrondown1.svg"
              />
              {show ? (
              <div ref={dropDownRef} className={styles.permissionDropdown}>
                <div className={styles.menuItems}>
                  {moreTabNames.map(tabName => {
                    return (
                      <div className={styles.inputDropdownMenuItem} key={tabName}>
                        <div className={styles.content}>
                          <div className={styles.text}>{tabName}</div>
                        </div>
                        <Image className={styles.highlightTickIcon} width={20} height={20} alt="" src="/check.svg" />
                      </div>
                    )
                  })}
                </div>
              </div>
              ) : null}
            </div>
            
        </div>
        <div className={styles.search}>
          <Image className={styles.searchIcon} width={20} height={20} alt="" src="/search.svg" />
          <input type="text" className={styles.searchSomething} placeholder='Search something'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;