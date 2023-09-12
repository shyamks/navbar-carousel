import styles from '../app/page.module.css';

const Paginate = ({ handleNext, handlePrev }) => {
  return (
    <div className={styles.slideIndicator}>
      <img
        className={"leftIcon"}
        onClick={handlePrev}
        alt=""
        src="/arrow-left.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <div className={styles.dotIndictaor}>
        <div className={styles.dotIndicator} />
      </div>
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <img
        className={styles.dotIndictaorIcon}
        alt=""
        src="/-dot-indictaor1.svg"
      />
      <img className={"rightIcon"} onClick={handleNext} alt="" src="/arrow-right.svg" />
    </div>
  )
}

export default Paginate;