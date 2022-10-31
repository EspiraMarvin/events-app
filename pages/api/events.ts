import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { MeetUpEvent } from "../../typings"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeetUpEvent[]>
) {
  let endpoint = `http://localhost:${process.env.NEXT_PORT}/api/users`
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_MEETUP_API_KEY}`,
    },
  }
  const events = (await axios.get(endpoint, config)).data
  // console.log('events', events)
  res.status(200).json(events)
}
