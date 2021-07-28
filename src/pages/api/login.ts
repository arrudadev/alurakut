import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';

export default async function loginHandler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'POST') {
    const token = jwt.sign(
      { user: request.body.githubUser },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    );

    response.status(200).json({ token });
  } else {
    response.status(404).json({
      message: `method ${request.method} does not exists`,
    });
  }
}
