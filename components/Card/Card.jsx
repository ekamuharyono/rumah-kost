import styles from './card.module.css';

const Card = (props) => {
  return (
    <div className={styles.cardBox}>
      <p className={styles.cardId}>{props.nomorKartu}</p>
      {props.type == 'action' ? <p className={styles.cardBayarButton}><p className='border w-max rounded-2xl text-sm px-3 -ml-3 py-1'>Perpanjang</p></p> : <p className={styles.cardDate}>Jun 21, 2022</p>}

      <p className={styles.cardTitle}>{props.namaLengkap}</p>
      <span className={styles.cardPrice}>Rp. {'150.000'}.00</span>
      <span className={styles.cardStatus}><p className='border w-max rounded-2xl text-sm px-3 py-1 mx-3'>{props.status || props.nomorKamar}</p></span>
    </div>
  );
}

export default Card;
