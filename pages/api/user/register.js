import connectDB from '../../../utils/db'
import { encryptPassword } from '../../../utils/modules'
import User from '../../../models/User'

const Register = async (req, res) => {
  // block if request is not post
  req.method !== 'POST' && res.status(400).json({ message: "only accept POST request!" })

  // process post request
  const { username, email, password } = req.body
  if (username && email && password) {
    try {
      const passwordHashed = await encryptPassword(password)
      const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: passwordHashed
      }

      const user = await User.findOne({ username: req.body.username })

      if (user === null) {
        await User.create(newUser)
        res.status(200).json({ "message": "Registration Success, Activasi Your Email Before 24hours" })
      }

      res.status(200).json({ "message": "Username Already Registered", "notifyColor": "warning" })

    } catch (error) {
      res.status(500).json({ "message": "Ups.. Something wrong was happened on server, Try next time!" })
    }
  } else {
    res.status(400).json({ "message": "your data incomplated" })
  }
}

export default connectDB(Register)