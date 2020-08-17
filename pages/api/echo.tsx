import { NextApiRequest, NextApiResponse } from "next"

interface MsgNextApiReq extends NextApiRequest {
    query: {
        message?: string
    }
}

export function echo(req: MsgNextApiReq, res: NextApiResponse) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base message'
    }))
}