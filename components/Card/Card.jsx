import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.cardBox}>
      <p className={styles.cardId}>123456789</p>
      <p className={styles.cardDate}>Jun 21, 2022</p>
      <p className={styles.cardTitle}>Ridho Ananda</p>
      <span className={styles.cardPrice}>Rp. {'150.000'}.00</span>
      <span className={styles.cardStatus}><p className='border w-max rounded-2xl text-sm px-3 py-1 text-center'>pending</p></span>
    </div>
  );
}

export default Card;
