import { Country, Genre, RadioStation } from './types';

const radioStations: RadioStation[] = [
  {
    id: 1,
    name: 'living sound instrumental',
    genre: 'Adult Pop',
    country: 'United States',
    img: '/img/living-sound-instrumental.png',
    src: 'https://str.pcradio.ru/Instrumental_fm-hi',
  },
  {
    id: 2,
    name: 'anarchy pistols',
    genre: 'Pop',
    country: 'Latvija',
    img: '/img/anarchy-pistols.png',
    src: 'https://str.pcradio.ru/sex_pistols-hi',
  },
  {
    id: 3,
    name: 'dance fm',
    genre: 'Dance',
    country: 'Germany',
    img: '/img/dance-fm.png',
    src: 'https://secureonair.krone.at/kronehit23.mp3',
  },
  {
    id: 4,
    name: 'europa plus',
    genre: 'Hip-Hop',
    country: 'Russia',
    img: '/img/europa-plus.png',
    src: 'https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3',
  },
  {
    id: 5,
    name: 'hip hop music',
    genre: 'Hip-Hop',
    country: 'United States',
    img: '/img/hip-hop-music.png',
    src: 'https://stream.europeanhitradio.com:8000/Stream_11.mp3',
  },
  {
    id: 6,
    name: 'indigo',
    genre: 'Electro',
    country: 'United States',
    img: '/img/indigo.png',
    src: 'https://str.pcradio.ru/electroradio_fm-hi',
  },
  {
    id: 7,
    name: 'japan-fm',
    genre: 'Rock',
    country: 'Testing',
    img: '/img/japan-fm.png',
    src: 'https://str.pcradio.ru/japan_a_radio-hi',
  },
  {
    id: 8,
    name: 'love radio',
    genre: 'Pop',
    country: 'Russia',
    img: '/img/love-radio.png',
    src: 'https://stream2.n340.com/12_love_64_reg_44?type=aac&UID=5E4C6EE5CE7BF40DBE6C64266F4EA190',
  },
  {
    id: 9,
    name: 'maximum fm',
    genre: 'Electro',
    country: 'Russia',
    img: '/img/maximum-fm.png',
    src: 'https://maximum.hostingradio.ru/maximum128.mp3',
  },
  {
    id: 10,
    name: 'mcm',
    genre: 'Hip-Hop',
    country: 'Local Radio',
    img: '/img/mcm-fm.png',
    src: 'https://webradio.mcm.fm:10443/hit256',
  },
  {
    id: 11,
    name: 'пилот фм',
    genre: 'Chanson',
    country: 'Belorussia',
    img: '/img/pilot-fm.png',
    src: 'https://stream.hoster.by/pilotfm/pilot_hd/icecast.audio',
  },
  {
    id: 12,
    name: 'pixel-radio',
    genre: 'Dance',
    country: 'Russia',
    img: '/img/pixel-radio.png',
    src: 'https://stream.mixadance.fm/mixadance',
  },
  {
    id: 13,
    name: 'радио 7',
    genre: 'Power Pop',
    country: 'Russia',
    img: '/img/radio-7.png',
    src: 'https://str.pcradio.ru/radio7_ru-hi',
  },
  {
    id: 14,
    name: 'radio tagline',
    genre: 'Rock',
    country: 'Belorussia',
    img: '/img/radio-tagline.png',
    src: 'https://live.radiospinner.com/90hs-64',
  },
  {
    id: 15,
    name: 'record',
    genre: 'Dance',
    country: 'Russia',
    img: '/img/record.png',
    src: 'https://online-1.gkvr.ru:8000/rr128_com_reg.aac',
  },
  {
    id: 16,
    name: 'ritmo 80',
    genre: 'Adult Pop',
    country: 'Latvija',
    img: '/img/ritmo-80.png',
    src: 'http://stream.funradio.sk:8000/80-90-128.mp3',
  },
  {
    id: 17,
    name: 'дорожное радио',
    genre: 'Chanson',
    country: 'Russia',
    img: '/img/road-fm.png',
    src: 'https://emgregion.hostingradio.ru:8064/moscow.dorognoe.mp3',
  },
  {
    id: 18,
    name: 'time',
    genre: 'Rock',
    country: 'Germany',
    img: '/img/time.png',
    src: 'https://str.pcradio.ru/housetime_fm-hi',
  },
  {
    id: 19,
    name: 'velena',
    genre: 'r&b soul',
    country: 'Germany',
    img: '/img/velena.png',
    src: 'https://radio.virginradio.co.uk/stream',
  },
  {
    id: 20,
    name: 'разбуди меня',
    genre: 'Hip-Hop',
    country: 'Russia',
    img: '/img/wake-me-up.png',
    src: 'https://rusradio.hostingradio.ru/rusradio128.mp3',
  },
  {
    id: 21,
    name: 'yo fm',
    genre: 'r&b soul',
    country: 'Germany',
    img: '/img/yo-fm.png',
    src: 'https://str.pcradio.ru/bayern_fresh4u-hi',
  },
  {
    id: 22,
    name: 'Авторадио',
    genre: 'Power Pop',
    country: 'Russia',
    img: '/img/avtoradio.png',
    src: 'https://str.pcradio.ru/avtoradio-hi',
  },
];

const countries: Country[] = [
  { id: 1, name: 'Testing' },
  { id: 2, name: 'Local Radio' },
  { id: 3, name: 'Russia', img: '/flags/ru.png' },
  { id: 4, name: 'United States', img: '/flags/us.png' },
  { id: 5, name: 'Germany', img: '/flags/de.png' },
  { id: 6, name: 'Latvija', img: '/flags/lv.png' },
  { id: 7, name: 'Belorussia', img: '/flags/by.png' },
];

const genres: Genre[] = [
  { id: 1, name: 'Pop' },
  { id: 2, name: 'Adult Pop' },
  { id: 3, name: 'Power Pop' },
  { id: 4, name: 'Dance' },
  { id: 5, name: 'Electro' },
  { id: 6, name: 'Hip-Hop' },
  { id: 7, name: 'r&b soul' },
  { id: 8, name: 'Rock' },
  { id: 9, name: 'Chanson' },
];

export { radioStations, countries, genres };
