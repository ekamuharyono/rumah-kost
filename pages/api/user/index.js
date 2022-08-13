const Index = async (req, res) => {
  const { cookies } = req

  const jwt = cookies.OursiteJWT

  if (!jwt) {
    res.json({ "message": "bro you are not logged in" })
  }
  res.json({ "jwt": jwt })

}

export default Index;
