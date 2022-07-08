import type { NextApiRequest, NextApiResponse } from 'next';
import { countries, Countries } from 'src/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Countries>
) {
  res.status(200).json(countries);
}
