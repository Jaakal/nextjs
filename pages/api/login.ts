// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import jwt from 'jsonwebtoken'

const jwtSecret = '2j34pk23nm4o234fs90+01i24'

export default function(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404
    res.end()
    return
  }

  const { username, password } = req.body

  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, jwtSecret)
  })
}
