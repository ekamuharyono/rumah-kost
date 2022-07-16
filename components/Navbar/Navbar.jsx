import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { IoHomeOutline, IoPodiumOutline, IoGiftOutline, IoWalletOutline, IoKeyOutline, IoChatbubbleEllipsesOutline, IoHelpCircleOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <section className={styles.navBox}>
      {/* brand */}
      <div id='brand' className={styles.navBrand}>
        <h1 className='font-semibold text-xl'>EMYGA Kost</h1>
        <span className={styles.humberger} onClick={() => showSidebar()}>
          {sidebar ? <IoCloseOutline /> : <IoMenuOutline />}
        </span>
      </div>
      {/* nav link items */}
      <div id='link' className={sidebar ? styles.navLink : styles.navLinkHidden}>
        <div>
          <Link href={'/'}>
            <a className={styles.navItem}>
              <IoHomeOutline />
              <span className='ml-4'>HOME</span>
            </a>
          </Link>
          <Link href={'/company'}>
            <a className={styles.navItem}>
              <IoPodiumOutline />
              <span className='ml-4'>COMPANY</span>
            </a>
          </Link>
          <Link href={'/perks'}>
            <a className={styles.navItem}>
              <IoGiftOutline />
              <span className='ml-4'>PERKS</span>
            </a>
          </Link>
          <Link href={'/legal'}>
            <a className={styles.navItem}>
              <IoKeyOutline />
              <span className='ml-4'>SIGN IN</span>
            </a>
          </Link>
          <Link href={'/payments'}>
            <a className={styles.navItem}>
              <IoWalletOutline />
              <span className='ml-4'>SIGN UP</span>
            </a>
          </Link>
        </div>

        {/* nav footer */}
        <div id='footer' className={styles.footer}>
          <hr className='w-48' />
          <div className={styles.navItemFooter}>
            <IoHelpCircleOutline />
            <span className='ml-4'>GET HELP</span>
          </div>
          <div className={styles.navItemFooter}>
            <IoChatbubbleEllipsesOutline />
            <span className='ml-4'>CHAT WITH US</span>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Navbar