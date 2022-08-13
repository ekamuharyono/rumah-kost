import { verify } from 'jsonwebtoken'

const Index = async (req, res) => {

  const screetkey = process.env.SCREET_KEY_REACT_APP
  const { cookies } = req
  const token = cookies.OursiteJWT
  const url = req.url


  if (!token) {
    res.status(401).json({ "message ": "bro you are not login" })
  }

  try {
    verify(token, screetkey)
    const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    res.status(200).json(decoded)
  } catch (error) {
    res.status(401).json({ "message": "invalid token" })
  }

}

export default Index;
