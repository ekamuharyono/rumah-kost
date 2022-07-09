import Navbar from "../components/Navbar/Navbar";
import styles from './index.module.css'

const Layout = ({ children }) => {

  return (
    <section className={styles.index}>
      <Navbar />
      <div className={styles.info}>{children}</div>
    </section>
  );
}

export default Layout;
