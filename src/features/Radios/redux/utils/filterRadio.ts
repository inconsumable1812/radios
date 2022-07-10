import { CountryNames, GenreNames, RadioStation } from 'src/api';

type Arguments = {
  allRadioStation: RadioStation[];
  chosenGenre: null | GenreNames;
  chosenCountry: null | CountryNames;
  searchValue: string;
};

const filterRadio = ({
  allRadioStation,
  chosenGenre,
  chosenCountry,
  searchValue,
}: Arguments) => {
  const filteredRadios = allRadioStation.filter((radio) => {
    if (chosenGenre === null && chosenCountry === null) {
      return radio.name
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase());
    }

    if (chosenGenre === null && chosenCountry !== null) {
      return (
        radio.name.toLowerCase().includes(searchValue.trim().toLowerCase()) &&
        radio.country === chosenCountry
      );
    }

    if (chosenGenre !== null && chosenCountry === null) {
      return (
        radio.name.toLowerCase().includes(searchValue.trim().toLowerCase()) &&
        radio.genre === chosenGenre
      );
    }

    if (chosenGenre !== null && chosenCountry !== null) {
      return (
        radio.name.toLowerCase().includes(searchValue.trim().toLowerCase()) &&
        radio.genre === chosenGenre &&
        radio.country === chosenCountry
      );
    }
  });

  return filteredRadios;
};

export { filterRadio };
