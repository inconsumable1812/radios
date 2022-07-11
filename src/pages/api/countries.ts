import type { NextApiRequest, NextApiResponse } from 'next';
import { countries, Country } from 'src/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Country[]>
) {
  res.status(200).json(countries);
}
