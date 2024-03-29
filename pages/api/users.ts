import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
// import type { EventBriteEvent } from "../../typings"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  try {
    let endpoint = `http://localhost:${process.env.NEXT_PORT}/api/users`
    //   let config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.NEXT_MEETUP_API_KEY}`,
    //     },
    //   }
    const users: any[] = (await axios.get(endpoint)).data
    // console.log("users req headers", users)
    res.status(200).json(users)
  } catch (error: any) {
    res.status(401).json(error.response?.data?.message)
  }
}
