import connectDB from '../../../utils/db'
import Client from '../../../models/Client'

const Add = async (req, res) => {
  req.method !== 'POST' && res.status(400).json({ message: 'only receive post request' })

  const { namaLengkap, nohp, email, pekerjaan, statusPernikahan, nomorKartu, nomorKamar, fingerprints } = req.body

  if (namaLengkap && nohp && statusPernikahan && pekerjaan && nomorKartu && nomorKamar && fingerprints) {
    try {
      const newClient = {
        namaLengkap, nohp, email, pekerjaan, statusPernikahan, nomorKartu, nomorKamar, fingerprints
      }
      await Client.create(newClient)
      res.status(200).json({ message: 'data client berhasil ditambahkan' })
    } catch (e) {
      res.status(500).json({ message: 'server problem' })
    }
  } else {
    res.status(400).json({ message: 'data tidak lengkap' })
  }
}

export default connectDB(Add);