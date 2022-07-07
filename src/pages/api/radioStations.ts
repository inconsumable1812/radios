// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RadioStations, radioStations } from 'src/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RadioStations>
) {
  res.status(200).json(radioStations);
}
