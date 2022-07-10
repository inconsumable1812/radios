import type { NextPage } from 'next';

import { PageHead } from 'src/components';
import { Radios } from 'src/features/Radios';

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="Radio"></PageHead>
      <Radios></Radios>
    </>
  );
};

export default Home;
