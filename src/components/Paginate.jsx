import Image from 'next/image';
import styles from '../app/page.module.css';

const Paginate = ({ handleNext, handlePrev }) => {
  return (
    <div className={styles.slideIndicator}>
      <Image
        className={"leftIcon"}
        width={24}
        height={24}
        onClick={handlePrev}
        alt=""
        src="/arrow-left.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <div className={styles.dotIndictaor}>
        <div className={styles.dotIndicator} />
      </div>
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt=""
        src="/dot-indictaor-type-1.svg"
      />
      <Image 
        className={"rightIcon"} 
        width={24}
        height={24} 
        onClick={handleNext} 
        alt="" 
        src="/arrow-right.svg" 
      />
    </div>
  )
}

export default Paginate;