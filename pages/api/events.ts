import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { MeetUpEvent } from '../../typings'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MeetUpEvent[]>
) {
    let endpoint = `https://www.eventbriteapi.com/v3/organizations/505677108825/events/`
    let config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_MEETUP_API_KEY}`
        }
    }
    const events = (await axios.get(endpoint, config)).data
    // console.log('events', events)
    res.status(200).json(events)
}

  