import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { IoHomeOutline, IoLogInOutline, IoPeopleOutline, IoChatbubbleEllipsesOutline, IoHelpCircleOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5'

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
              <span className='ml-4'>DASHBOARD</span>
            </a>
          </Link>
          <Link href={'/client'}>
            <a className={styles.navItem}>
              <IoPeopleOutline />
              <span className='ml-4'>CLIENTS</span>
            </a>
          </Link>
          <Link href={'/auth/login'}>
            <a className={styles.navItem}>
              <IoLogInOutline />
              <span className='ml-4'>LOGIN</span>
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