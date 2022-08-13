// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../utils/db'
import User from '../../models/User'
import { verify } from 'jsonwebtoken'

const handler = async (req, res) => {

  // const { cookies } = req
  // const token = cookies.key
  // res.send(token)

  // }

  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default connectDB(handler)