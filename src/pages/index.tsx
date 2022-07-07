import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MatrixButton } from 'src/components';
import { PageHead } from 'src/components/PageHead/PageHead';

const Home: NextPage = () => {
  const array = new Array(20).fill('');

  return (
    <div className={'grid'}>
      <PageHead title="Radio"></PageHead>

      <main>
        {array.map((el, i) => (
          <MatrixButton key={i}></MatrixButton>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
