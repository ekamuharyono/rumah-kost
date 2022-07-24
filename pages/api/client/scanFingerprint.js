import connectDB from '../../../utils/db'
import ScannerFingerprint from '../../../models/ScannerFingerprint'

const ScanFingerprint = async (req, res) => {
  if (req.method == 'GET') {
    const { activateFingerprint } = req.query
    try {
      activateFingerprint === 'true' ? await ScannerFingerprint.updateOne({ _id: "62daaf71442ad1a530468558" }, { isAddFingerprint: true }) : await ScannerFingerprint.updateOne({ _id: "62daaf71442ad1a530468558" }, { isAddFingerprint: false })
      const dataFingerprints = await ScannerFingerprint.find({ _id: "62daaf71442ad1a530468558" })
      res.status(200).json({ fingerprintDetected: dataFingerprints[0].fingerprints })
    } catch (error) {
      res.status(500).json({ message: "fail server" })
    }
  } else if (req.method === 'POST') {
    const { fingerprint } = req.body
    const { isAddFingerprint } = await ScannerFingerprint.findOne({ _id: "62daaf71442ad1a530468558" })
    if (isAddFingerprint) {
      await ScannerFingerprint.updateOne({ _id: "62daaf71442ad1a530468558" }, { $push: { fingerprints: [fingerprint] } })
      res.status(200).json({ fingerprintDetected: 'fingerprint added' })
    } else {
      res.status(400).end()
    }
  } else {
    res.status(200).json({ message: 'your request will not to process' })
  }
}

export default connectDB(ScanFingerprint)