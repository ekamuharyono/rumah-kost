import connectDB from "../../utils/db";
import Client from '../../models/Client'

const Cekkartu = async (req, res) => {
  if (req.method === 'GET') {
    const { id, from } = req.query

    const dataKartu = await Client.findOne({ nomorKartu: id })

    if (dataKartu !== null && dataKartu.nomorKamar === from) {
      res.status(200).json({ message: 'kartu ditemukan' })
    } else {
      res.status(401).json({ message: 'kartu tidak ditemukan' })
    }

  } else {
    res.status(404).json({ message: 'This Page Only Permit to GET Request!' })
  }
}

export default connectDB(Cekkartu)