import type { NextApiRequest, NextApiResponse } from 'next';
import { genres, Genre } from 'src/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Genre[]>
) {
  res.status(200).json(genres);
}
