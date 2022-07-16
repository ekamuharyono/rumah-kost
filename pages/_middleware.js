import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"

const screetkey = process.env.SCREET_KEY_REACT_APP

export default function middleware(req) {
  const { cookies } = req
  const token = cookies.key
  const url = req.url

  if (url.includes('/auth/login')) {
    if (jwt) {
      try {
        verify(token, screetkey)
        return NextResponse.redirect('/admin/dashboard')
      } catch (e) {
        return NextResponse.next()
      }
    }
  }

  if (url.includes('/admin/dashboard')) {
    if (token === undefined) {
      return NextResponse.redirect("/auth/login")
    }
    try {
      verify(token, screetkey)
      return NextResponse.next()
    } catch (e) {
      return NextResponse.redirect("/auth/login")
    }
  }
}