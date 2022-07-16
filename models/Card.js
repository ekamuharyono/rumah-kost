import mongoose from 'mongoose'
let { Schema } = mongoose

const cardSchema = new Schema({
  idCard: {
    type: String,
    required: true,
  }
})

mongoose.models = {}
const Card = mongoose.model('card', cardSchema)

export default Card