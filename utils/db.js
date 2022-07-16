import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
  const dblink = process.env.MONGODB_LINK_REACT_APP;
  await mongoose.connect(dblink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
  })

  return handler(req, res)
}

export default connectDB