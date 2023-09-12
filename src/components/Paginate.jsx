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
        alt="Left Arrow"
        src="/arrow-left.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator"
        src="/dot-indictaor.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <div className={styles.dotIndictaor}>
        <div className={styles.dotIndicator} />
      </div>
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <Image
        className={styles.dotIndictaorIcon}
        width={12}
        height={12}
        alt="Dot indicator Type 1"
        src="/dot-indictaor-type-1.svg"
      />
      <Image 
        className={"rightIcon"} 
        width={24}
        height={24} 
        onClick={handleNext} 
        alt="Right Arrow" 
        src="/arrow-right.svg" 
      />
    </div>
  )
}

export default Paginate;