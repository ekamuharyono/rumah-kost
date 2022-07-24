import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'

import Layout from '../../Layout'
import Card from '../../components/Card/Card'
import styles from '../../styles/index.module.css'
import { IoChevronDownOutline, IoChevronUpOutline, IoSearchOutline, IoAddOutline } from 'react-icons/io5'


const Clients = () => {

  const [clients, setClients] = useState([])
  const [showFilterBox, setShowFilterBox] = useState(false)
  const [filterValue, setFilterValue] = useState('Show all')

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/client',
      responseType: 'json'
    })
      .then(response => setClients(response.data))
      .catch(error => console.log(error))
  }, []);

  const filterShowAll = () => {
    setFilterValue('Show all')
    setShowFilterBox(false)

    axios({
      method: 'get',
      url: '/api/client',
      responseType: 'json'
    })
      .then(response => setClients(response.data))
      .catch(error => console.log(error))
  }

  const filterRoom01 = () => {
    setFilterValue('01')
    setShowFilterBox(false)

    axios({
      method: 'get',
      url: '/api/client?room=01',
      responseType: 'json'
    })
      .then(response => setClients(response.data))
      .catch(error => console.log(error))
  }

  const filterRoom02 = () => {
    setFilterValue('02')
    setShowFilterBox(false)

    axios({
      method: 'get',
      url: '/api/client?room=02',
      responseType: 'json'
    })
      .then(response => setClients(response.data))
      .catch(error => console.log(error))
  }

  const filterRoom03 = () => {
    setFilterValue('03')
    setShowFilterBox(false)

    axios({
      method: 'get',
      url: '/api/client?room=03',
      responseType: 'json'
    })
      .then(response => setClients(response.data))
      .catch(error => console.log(error))
  }

  const searchClient = (e) => {
    (!e) ? axios({
      method: 'get',
      url: '/api/client',
      responseType: 'json'
    })
      .then(response => setClients(response.data))
      .catch(error => console.log(error)) :
      axios({
        method: 'get',
        url: `/api/client?search=${e}`,
        responseType: 'json'
      })
        .then(response => setClients(response.data))
        .catch(error => console.log(error))
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <Layout>
      <div className={styles.addClientBox}>
        <div>
          <h1 className={styles.addClientTitle}>Client List</h1>
          <p className={styles.addClientDetailText}>List of all of your clients.</p>
        </div>
        <Link href={'/client/add'}>
          <a className={styles.buttonBox}>
            <span className={styles.buttonIcon}><IoAddOutline /></span>
            <p className={styles.buttonText}>NEW CLIENT</p>
          </a>
        </Link>
      </div>

      <div className=''>
        <div className={styles.searchBox}>
          <form onSubmit={handleSearch} className={styles.inputBox}>
            <label htmlFor="search" className={styles.formLabel}><IoSearchOutline /></label>
            <input onChange={(e) => searchClient(e.target.value)} type="text" id='search' placeholder='Search a client' className={styles.formControl} />
          </form>
          <div className={styles.filterBox}>
            <div className={styles.filterHeader}>
              <p className={styles.filterTitle}>{filterValue === 'Show all' ? 'Show all' : `Room ${filterValue}`}</p>
              <p>|</p>
              <span className={styles.filterIcon} onClick={() => setShowFilterBox(!showFilterBox)}>
                {showFilterBox ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
              </span>
            </div>
            {showFilterBox && (
              <ul className={styles.filterChoicesBox}>
                <li className={styles.filterChoicesItems} onClick={() => filterShowAll()}>Show all</li>
                <li className={styles.filterChoicesItems} onClick={() => filterRoom01()}>Room 01</li>
                <li className={styles.filterChoicesItems} onClick={() => filterRoom02()}>Room 02</li>
                <li className={styles.filterChoicesItems} onClick={() => filterRoom03()}>Room 03</li>
              </ul>
            )}
          </div>
        </div>

        <div className='font-semibold'>
          {/* header bar recently transaction (desktop only) */}
          <div className={styles.cardBox}>
            <p className={styles.cardId}>ID Card</p>
            <p className={styles.cardDate}>Action</p>
            <p className={styles.cardTitle}>Client</p>
            <span className={styles.cardPrice}>Amount</span>
            <span className={styles.cardStatus}><p>Room</p></span>
          </div>
          {/* client recently transactions */}
          <div className='relative overflow-y-hidden'>
            {clients.length > 0 ? clients.map((client, i) => (
              <Card key={i} type={'action'} namaLengkap={client.namaLengkap} nomorKartu={client.nomorKartu} nomorKamar={client.nomorKamar} />
            )) : <h1 className='flex justify-center mt-10'>Data Tidak Ditemukan</h1>}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Clients;