import connectDB from "../../../utils/db"
import Client from "../../../models/Client"

const Index = async (req, res) => {
  if (req.method === 'GET') {
    const { room, search } = req.query
    if (room) {
      try {
        const clients = await Client.find({ nomorKamar: room })
        res.status(200).json(clients)
      } catch (error) {
        res.status(500).json({ message: "server error" })
      }
    } else if (search) {
      try {
        const clients = await Client.find({ namaLengkap: search })
        res.status(200).json(clients)
      } catch (error) {
        res.status(500).json({ message: "server error" })
      }
    } else {
      try {
        const clients = await Client.find()
        res.status(200).json(clients)
      } catch (error) {
        res.status(500).json({ message: "server error" })
      }
    }
  }
}

export default connectDB(Index)