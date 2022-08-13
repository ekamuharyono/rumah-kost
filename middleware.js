import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'

export default function middleware(req) {
  const screetkey = process.env.SCREET_KEY_REACT_APP
  const { cookies } = req
  const token = cookies.OursiteJWT
  const url = req.url

  if (url.includes('/')) {
    if (!token) {
      return NextResponse.redirect('/auth/login')
    }

    try {
      verify(token, screetkey)
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect('/auth/login')
    }
  }
  return NextResponse.next()
}