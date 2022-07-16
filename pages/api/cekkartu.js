import connectDB from "../../utils/db";
import Card from '../../models/Card'

const Cekkartu = async (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query

    const dataKartu = await Card.findOne({ idCard: id })

    if (dataKartu !== null) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }

  } else {
    res.status(404).json({ message: 'This Page Only Permit to GET Request!' })
  }
}

export default connectDB(Cekkartu)