import { NextResponse, NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  //   console.log("middleware file", req.nextUrl)
  //   return NextResponse.rewrite(req.nextUrl)
  // example function to validate auth

  if (req.cookies) {
    // if (req.headers.has("Cookie")) {
    // console.log(req.cookies.getWithOptions("jwt") === undefined)
    console.log(req.cookies.getWithOptions("jwt") === undefined)

    return NextResponse.next()
  } else {
    const loginUrl = new URL("/auth", req.nextUrl)
    loginUrl.searchParams.set("from", req.nextUrl.pathname)

    return NextResponse.redirect(loginUrl)
  }

  // return NextResponse.rewrite(loginUrl)

  /*
  const response = new NextResponse()
  // if you want to set cookies

  response.cookies.set("auth", "secret")
  // set another cookie with options
  // response.cookies.set("nextjs", "awesome", { path: "/test" })

  // get all the details of a cookie
  const { value, options } = response.cookies.getWithOptions("jwt")
  // const { value, options } = response.cookies.getWithOptions("auth")

  console.log("response", response)

  console.log("values", value)
  console.log("options", options)
  */
  //delete all cookies
  /*
  response.cookies.clear()

  */
  // return Response.rewrite(req.nextUrl)
}

export const config = {
  matcher: ["/events/:path*", "/dashboard/:path*"],
}
