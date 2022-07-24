import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../../styles/authPages.module.css'
import { notifyError, notifyInfo, notifySuccess, notifyWarning } from '../../utils/notify'
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

const Register = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: '/api/user/register',
      data: {
        username, email, password
      },
      responseType: 'json'
    })
      .then(res => {
        res.data.notifyColor == 'warning' ? notifyWarning(res.data.message) : notifyInfo(res.data.message)
      })
      .catch(err => notifyError(err.response.data.message))
  }

  return (
    <div className={styles.authPage}>
      <ToastContainer />
      <div className={styles.authBox}>
        <h1 className={styles.authPageTitle}>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <label htmlFor='username' className={styles.formLabel}>
              <IoPersonCircleOutline />
            </label>
            <input
              type="text"
              id='username'
              value={username}
              placeholder='Username'
              className={styles.formControl}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor='email' className={styles.formLabel}>
              <IoAtOutline />
            </label>
            <input
              id='email'
              type="email"
              value={email}
              placeholder='Email'
              className={styles.formControl}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor='password' className={styles.formLabel}>
              <IoLockClosedOutline />
            </label>
            <input
              minLength='4'
              id='password'
              value={password}
              placeholder='Password'
              className={styles.formControl}
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className={styles.showPasswordButton}>
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
          <button type='submit' className={styles.formButton}>SIGN UP</button>
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
        <p className={styles.authFooter}>Have an Account? <Link href={'/auth/login'}><a className={styles.authFooterLink}>SignIn</a></Link> </p>
      </div>
    </div>
  );
}

export default Register;