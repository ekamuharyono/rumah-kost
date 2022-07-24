import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Layout from '../../Layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { notifyError, notifySuccess } from '../../utils/notify'
import { IoChevronForward, IoChevronBack, IoFingerPrintOutline } from 'react-icons/io5'

const Add = () => {

  const router = useRouter()

  const [namaLengkap, setNamaLengkap] = useState('')
  const [nohp, setNohp] = useState('')
  const [email, setEmail] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [statusPernikahan, setStatusPernikahan] = useState('')
  const [nomorKartu, setNomorKartu] = useState('')
  const [nomorKamar, setNomorKamar] = useState('')
  const [showPage2, setShowPage2] = useState(false)
  const [scannerActive, setScannerActive] = useState(false)
  const [fingerprintDetected, setFingerprintDetected] = useState(0)
  const [fingerprints, setFingerprints] = useState([])

  if (scannerActive) {
    setInterval(async () => {
      const response = await axios({
        method: 'get',
        url: `/api/client/scanFingerprint?activateFingerprint=${scannerActive}`,
        responseType: 'json'
      })
      setFingerprints(response.data.fingerprintDetected)
      setFingerprintDetected(response.data.fingerprintDetected.length)
    }, 5000)
  }

  const goToPage2 = () => {
    setShowPage2(!showPage2)
  }

  const activateFingerprintScanner = async () => {
    setScannerActive(!scannerActive)
    await axios({
      method: 'get',
      url: `/api/client/scanFingerprint?activateFingerprint=true`,
      responseType: 'json'
    })
  }

  const clearScanner = async () => {
    await axios({
      method: 'get',
      url: '/api/client/clearScanner',
      responseType: 'json'
    })
  }

  const saveData = (e) => {
    e.preventDefault()
    setScannerActive(false)
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
        fingerprints
      },
      responseType: 'json'
    })
      .then(response => {
        notifySuccess(response.data.message)
        clearScanner()
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
            <select onChange={(e) => setStatusPernikahan(e.target.value)} id="statusPernikahan" className='w-9/12 h-11 bg-white py-2 px-5 outline-none border rounded-3xl shadow'>
              <option value="sudah menikah">Sudah Menikah</option>
              <option value="belum menikah">Belum Menikah</option>
            </select>
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
          <span className='my-3 flex justify-center h-28 items-center relative'>
            <span className='absolute top-0'>{fingerprintDetected == 0 ? <h1 className='font-semibold'>No Fingerprint Detected</h1> : <h1 className='font-semibold'>Fingerprint Detected : {fingerprintDetected}</h1>}</span>
            <span onClick={activateFingerprintScanner} className='absolute text-6xl z-10 my-5 cursor-pointer hover:text-blue-700 duration-100'><IoFingerPrintOutline /></span>
            <span className='absolute bottom-0 font-semibold'>{scannerActive ? 'Stop Scanning' : 'Scan Fingerprint'}</span>
          </span>
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
