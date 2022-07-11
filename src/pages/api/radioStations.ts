// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RadioStation, radioStations } from 'src/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RadioStation[]>
) {
  res.status(200).json(radioStations);
}
