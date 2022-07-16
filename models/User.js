import mongoose from 'mongoose'
let { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})


mongoose.models = {}
const User = mongoose.model('user', userSchema)

export default User