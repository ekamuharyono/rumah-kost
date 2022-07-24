import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../../styles/authPages.module.css'
import { notifyError, notifySuccess } from '../../utils/notify'
import {
  IoPersonCircleOutline,
  IoLogoGoogle,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLockClosedOutline,
  IoEyeOffOutline,
  IoEyeOutline
} from 'react-icons/io5'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()

    const response = await axios({
      method: 'post',
      url: '/api/user/login',
      data: {
        username, password
      },
      responseType: 'json'
    })

    if (response.status === 200) {
      console.log(response)
      notifySuccess(response.data.message)
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 3000)
    } else {
      notifyError(err.response.data.message)
    }
    // .then(res => {
    //   console.log(res)
    //   // notifySuccess(res.data.message)
    //   // setTimeout(() => {
    //   //   router.push('/api/hello')
    //   // }, 3000)
    // })
    // .catch(err => notifyError(err.response.data.message))
  }

  return (
    <div className={styles.authPage}>
      <ToastContainer />
      <div className={styles.authBox}>
        <h1 className={styles.authPageTitle}>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.inputBox}>
            <label htmlFor='username' className={styles.formLabel}>
              <IoPersonCircleOutline />
            </label>
            <input
              id='username'
              type="text"
              placeholder='Username'
              className={styles.formControl}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor='password' className={styles.formLabel}>
              <IoLockClosedOutline />
            </label>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className={styles.formControl}
              onChange={(e) => setPassword(e.target.value)}
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
        <p className={styles.authFooter}>Don&apos;t have an Account? <Link href={'/auth/register'}><a className={styles.authFooterLink}>Create Account</a></Link> </p>
      </div>
    </div>
  );
}

export default Login;