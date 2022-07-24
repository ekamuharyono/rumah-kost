import connectDB from '../../../utils/db'
import ScannerFingerprint from '../../../models/ScannerFingerprint'

const ClearScanner = async (req, res) => {
  if (req.method == 'GET') {
    await ScannerFingerprint.updateOne({ _id: "62daaf71442ad1a530468558" }, { fingerprints: [], isAddFingerprint: false })
    res.status(200).end()
  }
}

export default connectDB(ClearScanner);
