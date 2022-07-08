import type { NextApiRequest, NextApiResponse } from 'next';
import { genres, Genres } from 'src/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Genres>
) {
  res.status(200).json(genres);
}
