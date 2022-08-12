import connectDB from "../../utils/db";
import Client from '../../models/Client'

const Cekkartu = async (req, res) => {
  if (req.method === 'GET') {
    const { rfid, fingerid, from } = req.query

    const dataKartu = await Client.findOne({ nomorKartu: rfid })

    if (dataKartu !== null && dataKartu.nomorKamar === from && dataKartu.fingerprints.includes(fingerid)) {
      res.status(200).json({ message: 'kartu ditemukan' })
    } else {
      res.status(401).json({ message: 'kartu tidak ditemukan' })
    }

  } else {
    res.status(404).json({ message: 'This Page Only Permit to GET Request!' })
  }
}

export default connectDB(Cekkartu)