import connectDB from '../../../utils/db'
import Client from '../../../models/Client'

const HapusKartu = async (req, res) => {
  const { nomorKartu } = req.body
  if (req.method === 'PUT') {
    const client = await Client.find({ nomorKartu })
    if (client.length > 0) {
      await Client.deleteOne({ nomorKartu })
      res.status(200).json({ message: `Data ${client[0].namaLengkap} Telah di Hapus` })
    } else {
      res.status(404).json({ message: 'client tidak ditemukan' })
    }
  }
}

export default connectDB(HapusKartu);
