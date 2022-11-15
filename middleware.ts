import { NextResponse, NextRequest } from "next/server"

console.log("middleware run")


export function middleware(req: NextRequest) {
  console.log("req.cookies at middleware req", req)

  //   console.log("middleware file", req.nextUrl)
  //   return NextResponse.rewrite(req.nextUrl)
  // example function to validate auth

  // const { value, options } = response.cookies.getWithOptions("jwt")
  // const { value, options } = response.cookies.getWithOptions("auth")

  if (req.cookies) {
    console.log("req.cookies at middleware", req.cookies)

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

  // return Response.rewrite(req.nextUrl)
}

export const config = {
  matcher: ["/events/:path*", "/dashboard/:path*"],
}
