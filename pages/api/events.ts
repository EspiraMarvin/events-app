import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Event } from '../../types'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Event[]>
) {
    let endpoint = `https://www.eventbriteapi.com/v3/organizations/505677108825/events/`
    let config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer `
        }
    }
    
}

  