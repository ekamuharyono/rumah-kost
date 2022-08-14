// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../utils/db'
import Client from '../../models/Client'
import { verify } from 'jsonwebtoken'

const handler = async (req, res) => {

  // const { cookies } = req
  // const token = cookies.key
  // res.send(token)

  // }

  try {
    const users = await Client.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default connectDB(handler)