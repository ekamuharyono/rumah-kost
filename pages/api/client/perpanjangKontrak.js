import connectDB from '../../../utils/db'
import Client from '../../../models/Client'

const PerpanjangKontrak = async (req, res) => {
  const { nomorKartu } = req.body
  if (req.method === 'PUT') {
    const client = await Client.find({ nomorKartu })
    // res.status(200).json({ activeFor: client[0].activeFor })
    let newActiveFor = client[0].activeFor + 2592000000
    if (client.length > 0) {
      await Client.updateOne({ nomorKartu }, { activeFor: newActiveFor })
      res.status(200).json({ message: 'kontrak diperpanjang' })
    } else {
      res.status(404).json({ message: 'client tidak ditemukan' })
    }
    // Client.updateOne({nomorKartu}, {activeFor})
  }
}

export default connectDB(PerpanjangKontrak);
