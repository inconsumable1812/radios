import { CountryNames, GenreNames, RadioStation } from 'src/api';

type Arguments = {
  allRadioStation: RadioStation[];
  isShowBestRadio: boolean;
  bestRadioStations: RadioStation[];
  chosenGenre: null | GenreNames;
  chosenCountry: null | CountryNames;
  searchValue: string;
};

const filterRadio = ({
  allRadioStation,
  chosenGenre,
  chosenCountry,
  searchValue,
  isShowBestRadio,
  bestRadioStations,
}: Arguments) => {
  const filteredRadios = isShowBestRadio
    ? bestRadioStations.filter((radio) => {
        if (chosenGenre === null && chosenCountry === null) {
          return radio.name
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase());
        }

        if (chosenGenre === null && chosenCountry !== null) {
          return (
            radio.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) &&
            radio.country === chosenCountry
          );
        }

        if (chosenGenre !== null && chosenCountry === null) {
          return (
            radio.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) &&
            radio.genre === chosenGenre
          );
        }

        if (chosenGenre !== null && chosenCountry !== null) {
          return (
            radio.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) &&
            radio.genre === chosenGenre &&
            radio.country === chosenCountry
          );
        }
      })
    : allRadioStation.filter((radio) => {
        if (chosenGenre === null && chosenCountry === null) {
          return radio.name
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase());
        }

        if (chosenGenre === null && chosenCountry !== null) {
          return (
            radio.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) &&
            radio.country === chosenCountry
          );
        }

        if (chosenGenre !== null && chosenCountry === null) {
          return (
            radio.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) &&
            radio.genre === chosenGenre
          );
        }

        if (chosenGenre !== null && chosenCountry !== null) {
          return (
            radio.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) &&
            radio.genre === chosenGenre &&
            radio.country === chosenCountry
          );
        }
      });

  return filteredRadios;
};

export { filterRadio };
