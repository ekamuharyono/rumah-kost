import connectDB from '../../../utils/db'
import Client from '../../../models/Client'

const BerhentiKontrak = async (req, res) => {
  const { nomorKartu } = req.body
  if (req.method === 'PUT') {
    const client = await Client.find({ nomorKartu })
    // res.status(200).json({ activeFor: client[0].activeFor })
    if (client.length > 0) {
      await Client.updateOne({ nomorKartu }, { status: "InActive" })
      res.status(200).json({ message: 'Kontrak di Akhiri' })
    } else {
      res.status(404).json({ message: 'client tidak ditemukan' })
    }
    // Client.updateOne({nomorKartu}, {activeFor})
  }
}

export default connectDB(BerhentiKontrak);
