import { FC } from 'react';

import styles from './Container.module.scss';

import { useAppSelector } from 'src/app/hooks';
import { selectData } from '../../redux/slice';
import {
  MyBestButton,
  RadioButton,
  GenreButton,
  CountryButton,
} from '../components';

type Props = {};

const Container: FC<Props> = ({}) => {
  const { filteredRadioStations, countries, genres } =
    useAppSelector(selectData);

  return (
    <div className={`grid ${styles.template} gap-3.5 md:gap-3.75 xl:gap-3`}>
      <div className={`grid ${styles.best}`}>
        <MyBestButton></MyBestButton>
      </div>
      <div
        className={`grid ${styles.genres} overflow-auto h-[64px] md:h-[84px] pl-1.5`}
      >
        <div className={`flex gap-3.5 md:gap-3.75 xl:gap-3 `}>
          {genres.map((genre) => (
            <GenreButton key={genre.id} name={genre.name}></GenreButton>
          ))}
        </div>
      </div>
      <div
        className={`grid ${styles.countries} pt-1.5 overflow-auto w-[64px] md:w-[84px]`}
      >
        <div className={`flex flex-col gap-3.5 md:gap-3.75 xl:gap-3 `}>
          {countries.map((country) => (
            <CountryButton
              key={country.id}
              url={country.img}
              name={country.name}
            ></CountryButton>
          ))}
        </div>
      </div>
      <div
        className={`grid grid-cols-autoFill grid-rows-autoFill gap-3.5 md:grid-cols-autoFillMd md:grid-rows-autoFillMd md:gap-3.75 xl:gap-3 overflow-auto pl-1.5 pt-1.5 ${styles.radios}`}
      >
        {filteredRadioStations.map((radio) => (
          <RadioButton
            key={radio.id}
            radio={radio}
            url={radio.img}
            name={radio.name}
            src={radio.src}
          ></RadioButton>
        ))}
      </div>
    </div>
  );
};

export { Container };
