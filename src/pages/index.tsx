import type { NextPage } from 'next';
import { Countries, Genres, RadioStations } from 'src/api';
import { MatrixButton, PageHead } from 'src/components';

import useSWR from 'swr';

const fetcher = (url: URL) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data: radioStations, error: radioStationsError } = useSWR<
    RadioStations,
    Error
  >('/api/radioStations', fetcher);
  const { data: countries, error: countriesError } = useSWR<Countries, Error>(
    '/api/countries',
    fetcher
  );
  const { data: genres, error: genresError } = useSWR<Genres, Error>(
    '/api/genres',
    fetcher
  );

  const isError = radioStationsError || countriesError || genresError;
  const isLoading =
    radioStations === undefined ||
    countries === undefined ||
    genres === undefined;

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <PageHead title="Radio"></PageHead>

      <main>
        <div className="grid grid-cols-autoFill gap-3.5 md:grid-cols-autoFillMd md:gap-3.75 xl:gap-3 ">
          <MatrixButton name="My Best" variant="withColor"></MatrixButton>
        </div>
        <div className="grid grid-cols-autoFill gap-3.5 md:grid-cols-autoFillMd md:gap-3.75 xl:gap-3 ">
          {countries.map((country) => (
            <MatrixButton
              key={country.id}
              url={country.img}
              name={country.name}
              variant="withFlag"
            ></MatrixButton>
          ))}
        </div>
        <div className="grid grid-cols-autoFill gap-3.5 md:grid-cols-autoFillMd md:gap-3.75 xl:gap-3 ">
          {genres.map((genre) => (
            <MatrixButton
              key={genre.id}
              name={genre.name}
              variant="text"
            ></MatrixButton>
          ))}
        </div>
        <div className="grid grid-cols-autoFill gap-3.5 md:grid-cols-autoFillMd md:gap-3.75 xl:gap-3 ">
          {radioStations.map((radio) => (
            <MatrixButton
              key={radio.id}
              url={radio.img}
              name={radio.name}
              variant="withImage"
            ></MatrixButton>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
