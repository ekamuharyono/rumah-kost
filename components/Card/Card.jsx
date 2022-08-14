import axios from 'axios'
import { useRouter } from 'next/router'
import { notifyError, notifySuccess } from '../../utils/notify'
import styles from './card.module.css';

const Card = (props) => {
  const router = useRouter()

  const showModalBox = () => {
    props.activeModalBox(props.namaLengkap, props.nomorKartu)
  }

  const borderColorStatus = (status) => {
    switch (status) {
      case 'Active':
        return 'border border-blue-500 text-blue-700 w-max rounded-2xl text-sm px-4 py-1 mx-3'
      case 'InActive':
        return 'border border-red-500 text-red-700 w-max rounded-2xl text-sm px-4 py-1 mx-3'
      case 'Pending':
        return 'border border-yellow-500 text-yellow-700 w-max rounded-2xl text-sm px-4 py-1 mx-3'
      default:
        return 'border w-max rounded-2xl text-sm px-4 py-1 mx-3'
    }
  }

  return (
    <div className={styles.cardBox}>
      <p className={styles.cardId}>{props.nomorKartu}</p>
      {props.type == 'action' ?
        <p className={styles.cardBayarButton}>
          <p onClick={showModalBox} className='-mt-2 text-center rounded-md border shadow-sm px-4 py-2 text-base font-medium hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm cursor-pointer duration-75'>Aksi</p>
        </p>
        :
        <p className={styles.cardDate}><p>{props.date}</p></p>}
      <p className={styles.cardTitle}>{props.namaLengkap}</p>
      <span className={styles.cardPrice}>Rp. {'150.000'}.00</span>
      <span className={styles.cardStatus}><p className={borderColorStatus(props.nomorKamar)}>{props.status || props.nomorKamar}</p></span>
    </div >
  );
}

export default Card;
