import connectDB from '../../../utils/db'
import Client from '../../../models/Client'

const AktifkanKartu = async (req, res) => {
  const { nomorKartu } = req.body
  if (req.method === 'PUT') {
    const client = await Client.find({ nomorKartu })
    if (client.length > 0) {
      await Client.updateOne({ nomorKartu }, { status: 'Active' })
      res.status(200).json({ message: 'Kartu di Aktifkan' })
    } else {
      res.status(404).json({ message: 'client tidak ditemukan' })
    }
  }
}

export default connectDB(AktifkanKartu);