import mongoose from 'mongoose'
let { Schema } = mongoose

const fingerprintsSchema = new Schema({
  isAddFingerprint: {
    type: Boolean,
    default: false,
    required: true,
  },
  fingerprints: [String]
})


mongoose.models = {}
const ScannerFingerprint = mongoose.model('fingerprintScanner', fingerprintsSchema)

export default ScannerFingerprint