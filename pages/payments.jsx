import Layout from '../Layout'
import Card from '../components/Card/Card'
import styles from '../styles/payments.module.css'
import { useState } from 'react'
import { IoPersonOutline, IoChevronDownOutline, IoChevronUpOutline, IoSearchOutline, IoAddOutline } from 'react-icons/io5'

const Payments = () => {

  const [showFilterBox, setShowFilterBox] = useState(false)
  const [filterValue, setFilterValue] = useState('Show all')

  const filterShowAll = () => {
    setFilterValue('Show all')
    setShowFilterBox(false)
  }

  const filterPending = () => {
    setFilterValue('Pending')
    setShowFilterBox(false)
  }

  const filterDraft = () => {
    setFilterValue('Draft')
    setShowFilterBox(false)
  }

  const filterPaid = () => {
    setFilterValue('Paid')
    setShowFilterBox(false)
  }

  return (
    <Layout>
      <div className='px-5'>
        {/* header payments */}
        <div className={styles.header}>
          <h1 className={styles.headerText}>Payments</h1>
          <div className={styles.userInfo}>
            <span className={styles.avatar}>
              <IoPersonOutline />
            </span>
            <h1 className={styles.username}>Eka Muharyono</h1>
            <span className={styles.buttonArrow}>
              <IoChevronDownOutline />
            </span>
          </div>
        </div>

        {/* main */}
        <div className={styles.addClientBox}>
          <div>
            <h1 className={styles.addClientTitle}>Invoices</h1>
            <p className={styles.addClientDetailText}>List of all of your transactions.</p>
          </div>
          <button className={styles.buttonBox}>
            <span className={styles.buttonIcon}><IoAddOutline /></span>
            <p className={styles.buttonText}>NEW INVOICE</p>
          </button>
        </div>

        <div className=''>
          <div className={styles.searchBox}>
            <form action="" className={styles.inputBox}>
              <label htmlFor="search" className={styles.formLabel}><IoSearchOutline /></label>
              <input type="text" id='search' placeholder='Search a client' className={styles.formControl} />
            </form>
            <div className={styles.filterBox}>
              <div className={styles.filterHeader}>
                <p className={styles.filterTitle}>{filterValue}</p>
                <p>|</p>
                <span className={styles.filterIcon} onClick={() => setShowFilterBox(!showFilterBox)}>
                  {showFilterBox ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                </span>
              </div>
              {showFilterBox && (
                <ul className={styles.filterChoicesBox}>
                  <li className={styles.filterChoicesItems} onClick={() => filterShowAll()}>Show all</li>
                  <li className={styles.filterChoicesItems} onClick={() => filterPending()}>Pending</li>
                  <li className={styles.filterChoicesItems} onClick={() => filterDraft()}>Draft</li>
                  <li className={styles.filterChoicesItems} onClick={() => filterPaid()}>Paid</li>
                </ul>
              )}
            </div>
          </div>

          <div className='font-semibold'>
            {/* header bar recently transaction (desktop only) */}
            <div className={styles.cardBox}>
              <p className={styles.cardId}>ID Card</p>
              <p className={styles.cardDate}>Date</p>
              <p className={styles.cardTitle}>Client</p>
              <span className={styles.cardPrice}>Amount</span>
              <span className={styles.cardStatus}><p>Status</p></span>
            </div>
            {/* client recently transactions */}
            <div>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Payments;
