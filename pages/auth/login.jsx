import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/authPages.module.css'
import {
  IoPersonCircleOutline,
  IoLogoGoogle,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoAtOutline,
  IoLockClosedOutline,
  IoEyeOffOutline,
  IoEyeOutline
} from 'react-icons/io5'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.authPage}>
      <div className={styles.authBox}>
        <h1 className={styles.authPageTitle}>LOGIN</h1>
        <form action="">
          <div className={styles.inputBox}>
            <label htmlFor='username' className={styles.formLabel}>
              <IoPersonCircleOutline />
            </label>
            <input
              id='username'
              required
              type="text"
              placeholder='Username'
              className={styles.formControl}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor='password' className={styles.formLabel}>
              <IoLockClosedOutline />
            </label>
            <input
              id='password'
              required
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className={styles.formControl}
            />
            <span onClick={() => setShowPassword(!showPassword)} className={styles.showPasswordButton}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
          <div className='text-right text-sm font-semibold opacity-60 pt-3 cursor-pointer'><Link href={'/auth/forget-password'}><a>Forget Password?</a></Link></div>
          <button type='submit' className={styles.formButton}>SIGN IN</button>
        </form>
        <span className='border-t w-full block mt-3 mb-2 flex justify-center relative'>
          <p className='text-center -mt-3 px-3 w-20 font-semibold bg-slate-50 text-slate-700 opacity-90'>OR</p>
        </span>
        <div className={styles.sosmedBox}>
          <span className={styles.sosmedGoogle}>
            <IoLogoGoogle />
          </span>
          <span className={styles.sosmedFacebook}>
            <IoLogoFacebook />
          </span>
          <span className={styles.sosmedLinkedIn}>
            <IoLogoLinkedin />
          </span>
        </div>
        <p className={styles.authFooter}>Don't have an Account? <Link href={'/auth/register'}><a className={styles.authFooterLink}>Create Account</a></Link> </p>
      </div>
    </div>
  );
}

export default Login;