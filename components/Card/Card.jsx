import axios from 'axios'
import { useRouter } from 'next/router'
import { notifyError, notifySuccess } from '../../utils/notify'
import styles from './card.module.css';

const Card = (props) => {
  const router = useRouter()

  const perpanjang = async () => {
    await axios({
      method: 'put',
      url: '/api/client/perpanjangKontrak',
      data: {
        nomorKartu: props.nomorKartu
      },
      responseType: 'json'
    })
      .then(response => {
        alert(response.data.message)
      })
  }

  return (
    <div className={styles.cardBox}>
      <p className={styles.cardId}>{props.nomorKartu}</p>
      {props.type == 'action' ? <p className={styles.cardBayarButton}><p onClick={perpanjang} className='border w-max rounded-2xl text-sm px-3 font-normal -ml-3 py-1 hover:bg-green-300 hover:shadow duration-100 cursor-pointer'>Perpanjang</p></p> : <p className={styles.cardDate}><p>{props.date}</p></p>}

      <p className={styles.cardTitle}>{props.namaLengkap}</p>
      <span className={styles.cardPrice}>Rp. {'150.000'}.00</span>
      <span className={styles.cardStatus}><p className='border w-max rounded-2xl text-sm px-3 py-1 mx-3'>{props.status || props.nomorKamar}</p></span>
    </div>
  );
}

export default Card;
