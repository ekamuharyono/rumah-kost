import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Layout from '../../Layout'
import styles from '../../styles/index.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { notifyError, notifySuccess } from '../../utils/notify'
import { IoChevronForward, IoChevronBack, IoFingerPrintOutline, IoChevronDownOutline, IoChevronUpOutline, IoSearchOutline, IoAddOutline } from 'react-icons/io5'

const Add = () => {

  const router = useRouter()

  const [showFilterBox, setShowFilterBox] = useState(false)

  const [namaLengkap, setNamaLengkap] = useState('')
  const [nohp, setNohp] = useState('')
  const [email, setEmail] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [statusPernikahan, setStatusPernikahan] = useState('')
  const [nomorKartu, setNomorKartu] = useState('')
  const [nomorKamar, setNomorKamar] = useState('')
  const [showPage2, setShowPage2] = useState(false)
  const [fingerprints, setFingerprints] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get("/api/user")
      .then(response => setUser(response.data))
      .catch(err => router.push('/auth/login'))
  }, [])

  const goToPage2 = () => {
    setShowPage2(!showPage2)
  }

  const saveData = (e) => {
    e.preventDefault()
    const now = Date.now()
    axios({
      method: 'POST',
      url: '/api/client/add',
      data: {
        namaLengkap,
        nohp,
        email,
        pekerjaan,
        statusPernikahan,
        nomorKamar,
        nomorKartu,
        fingerprints,
        registerAt: now,
        activeFor: now + 2592000000
      },
      responseType: 'json'
    })
      .then(async (response) => {
        notifySuccess(response.data.message)
        setTimeout(() => {
          router.push('/client')
        }, 3000)
      })
      .catch(error => {
        notifyError(error.response.data.message)
      })
  }

  return (
    <Layout>
      <ToastContainer />
      <h1 className='text-center text-3xl py-5 font-semibold'>Add New Client</h1>
      <form className='p-5 relative' onSubmit={saveData}>

        {/* ini halaman data client */}
        <div id='page1' className={showPage2 ? 'hidden' : 'block'}>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="namaLengkap">Nama Lengkap</label>
            <input type="text" name='namaLengkap' id='namaLengkap' onChange={(e) => setNamaLengkap(e.target.value)} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow  focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="nohp">No.Hp</label>
            <input type="text" id='nohp' name='nohp' onChange={(e) => setNohp(e.target.value)} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' placeholder='(optional)' onChange={(e) => setEmail(e.target.value)} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="pekerjaan">Pekerjaan</label>
            <input type="text" id='pekerjaan' name='pekerjaan' onChange={(e) => setPekerjaan(e.target.value)} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="statusPernikahan">Status Pernikahan</label>
            <div className='w-9/12 py-2 px-5 outline-none border rounded-3xl cursor-pointer shadow focus:drop-shadow'>
              <div className={styles.filterBox} onClick={() => setShowFilterBox(!showFilterBox)}>
                <div className={styles.filterHeader}>
                  <p className={styles.filterTitle}>{statusPernikahan === '' ? 'Status Pernikahan' : `${statusPernikahan}`}</p>
                  <span className={styles.filterIcon}>
                    {showFilterBox ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                  </span>
                </div>
                {showFilterBox && (
                  <ul className={styles.filterChoicesBox}>
                    <li className={styles.filterChoicesItems} onClick={() => setStatusPernikahan('Belum Menikah')}>Belum Menikah</li>
                    <li className={styles.filterChoicesItems} onClick={() => setStatusPernikahan('Sudah Menikah')}>Sudah Menikah</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <span onClick={goToPage2} className='flex items-center justify-around bg-blue-400 py-4 px-5 font-semibold w-32 cursor-pointer drop-shadow-sm rounded-full text-slate-50 absolute right-0 mt-5 mr-5 hover:bg-blue-500 hover:drop-shadow duration-75'>
            <span>Next</span>
            <span><IoChevronForward /></span>
          </span>
        </div>

        {/* ini halaman data paket langganan */}
        <div id='page2' className={showPage2 ? 'block' : 'hidden'}>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="nomorKartu">Nomor Kartu</label>
            <input type="text" id='nomorKartu' name='nomorKartu' onChange={(e) => setNomorKartu(e.target.value)} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow  focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="nomorKamar">Nomor Kamar</label>
            <input type="text" id='nomorKamar' name='nomorKamar' onChange={(e) => setNomorKamar(e.target.value)} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="fingerprint1">Fingerprint 1</label>
            <input type="text" id='fingerprint1' name='fingerprin1' onChange={(e) => setFingerprints([...fingerprints, e.target.value])} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="fingerprint2">Fingerprint 2</label>
            <input type="text" id='fingerprint2' name='fingerprint2' onChange={(e) => setFingerprints([...fingerprints, e.target.value])} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='py-3 flex justify-between items-center'>
            <label htmlFor="fingerprint3">Fingerprint 3</label>
            <input type="text" id='fingerprint3' name='fingerprint3' onChange={(e) => setFingerprints([...fingerprints, e.target.value])} className='w-9/12 py-2 px-5 outline-none border rounded-3xl shadow focus:drop-shadow' />
          </div>
          <div className='flex justify-between'>
            <span onClick={goToPage2} className='flex items-center justify-around bg-blue-400 py-4 px-5 font-semibold w-32 cursor-pointer drop-shadow-sm rounded-full text-slate-50 mt-5 mr-5 hover:bg-blue-500 hover:drop-shadow duration-75'>
              <span><IoChevronBack /></span>
              <span>Back</span>
            </span>
            <button type='submit' className='flex items-center justify-around bg-blue-400 py-4 px-5 font-semibold w-32 cursor-pointer drop-shadow-sm rounded-full text-slate-50 mt-5 mr-5 hover:bg-blue-500 hover:drop-shadow duration-75'>
              <span>Save</span>
              <span><IoChevronForward /></span>
            </button>
          </div>
        </div>

      </form>
    </Layout >
  );
}

export default Add;
