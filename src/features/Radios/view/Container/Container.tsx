import { FC } from 'react';

import styles from './Container.module.scss';
import { useAppSelector } from 'src/app/hooks';
import { selectData } from '../../redux/slice';
import { MyBestButton } from '../components';
import { GenreContainer } from '../components/GenreContainer/GenreContainer';
import { CountryContainer } from '../components/CountryContainer/CountryContainer';
import { RadioContainer } from '../components/RadioContainer/RadioContainer';

type Props = {};

const Container: FC<Props> = ({}) => {
  const { filteredRadioStations, countries, genres, allRadioStation } =
    useAppSelector(selectData);

  const radioBackground =
    allRadioStation.length !== filteredRadioStations.length
      ? 'bg-filteredRadio'
      : 'bg-transparent';

  return (
    <div
      className={`grid ${styles.template} gap-3.5 md:gap-3.75 xl:gap-3 pl-0.5 ml[-0.125rem]`}
    >
      <div className={`grid ${styles.best}`}>
        <MyBestButton></MyBestButton>
      </div>
      <div
        className={`grid ${styles.genres} h-[64px] md:h-[86px] px-4 mx-[-1rem] relative`}
      >
        <GenreContainer genres={genres}></GenreContainer>
      </div>
      <div
        className={`grid ${styles.countries} pb-10 pt-4 mt-[-1rem] w-[64px] md:w-[84px] pl-0.5 ml[-0.125rem]`}
      >
        <CountryContainer countries={countries}></CountryContainer>
      </div>
      <div className={`grid  ${styles.radios} `}>
        <RadioContainer
          radioStations={filteredRadioStations}
          radioBackground={radioBackground}
        ></RadioContainer>
      </div>
    </div>
  );
};

export { Container };
