import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div><h1>ini halaman website untuk data</h1></div>
    </Layout>
    // <div className={styles.index}>

    // <div className={styles.info}><h1>ini halaman website untuk data</h1></div>
    /* <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <span className='font-bold'>Rumah Kost</span>
      </a>
    </footer> */
    // </div >
  )
}
