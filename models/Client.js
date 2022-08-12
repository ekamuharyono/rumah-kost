import mongoose from 'mongoose'
let { Schema } = mongoose

const clientSchema = new Schema({
  namaLengkap: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
    required: true,
  },
  pekerjaan: {
    type: String,
    required: true,
  },
  statusPernikahan: {
    type: String,
    required: true,
  },
  nomorKamar: {
    type: String,
    required: true,
  },
  nomorKartu: {
    type: String,
    required: true,
  },
  registerAt: {
    type: Number,
    required: true,
  },
  activeFor: {
    type: Number,
    required: true
  },
  fingerprints: {
    type: Array,
    default: [String],
    required: true
  },
  status: {
    type: String,
    default: 'Active'
  },
  amount: {
    type: String,
    default: '150.000.00'
  }
})


mongoose.models = {}
const Client = mongoose.model('client', clientSchema)

export default Client