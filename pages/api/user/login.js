import connectDB from '../../../utils/db'
import User from '../../../models/User'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
import { set } from 'mongoose'

const screetkey = process.env.SCREET_KEY_REACT_APP

const Login = async (req, res) => {
  // // block if request is not post
  req.method !== 'POST' && res.status(400).json({ message: "only accept POST request!" })

  // // process post request
  const { username, password } = req.body
  if (username && password) {
    try {
      const user = await User.findOne({ username: req.body.username })
      if (user !== null) {
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (isPasswordMatch) {
          const token = await sign({ username: user.username, email: user.email }, screetkey, { expiresIn: 20000 })
          const serialized = serialize('key', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 20000,
            path: '/', S
          })

          res.setHeader('Set-Cookie', serialized)
          res.status(200).json({ "message": "Login Success!", token })
        } else {
          res.status(400).json({ "message": "wrong username or password!" })
        }
      } else {
        res.status(400).json({ "message": "wrong username or password!" })
      }
    } catch (error) {
      res.status(500).json({ "message": "Ups.. Something wrong was happened on server, Try next time!" })
    }
  } else {
    res.status(400).json({ "message": "your data incomplated" })
  }
}

export default connectDB(Login)