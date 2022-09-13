import { FC, useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { Loader } from 'src/components';
import { REQUEST_STATUS } from 'src/helpers/redux';
import { selectData } from './redux/selectors';
import {
  getRadioStations,
  getGenres,
  getCountries,
  changeIsLoadingRadioStation,
  changeIsPlay,
} from './redux/slice';
import { Header } from './view/components/Header/Header';
import { Container } from './view/Container/Container';

type Props = {};

const Radios: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { status, error, isPlay, chosenRadio, isLoadingRadioStations, volume } =
    useAppSelector(selectData);
  const audioContainer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    dispatch(getRadioStations());
    dispatch(getGenres());
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (chosenRadio !== null) {
      if (audioContainer.current !== null) {
        audioContainer.current.play().then(() => {
          dispatch(changeIsPlay(true));
          dispatch(changeIsLoadingRadioStation(false));
        });
        audioContainer.current.volume = +volume / 100;
        dispatch(changeIsLoadingRadioStation(true));
      }
    } else {
      dispatch(changeIsLoadingRadioStation(false));
      dispatch(changeIsPlay(false));
      if (audioContainer.current !== null) {
        audioContainer.current.pause();
      }
    }
  }, [chosenRadio, dispatch]);

  if (audioContainer.current !== null) {
    audioContainer.current.volume = +volume / 100;
  }

  switch (status) {
    case REQUEST_STATUS.pending:
      return (
        <div className="flex h-full items-center justify-center">
          <Loader />
        </div>
      );
    case REQUEST_STATUS.fulfilled:
      return (
        <>
          <Header></Header>
          <main className="mx-2.5 md:mx-6 xl:mx-8.5">
            {chosenRadio !== null && (
              <audio ref={audioContainer} src={chosenRadio.src}></audio>
            )}
            <div className="my-2 min-h-[16px] self-end">
              {isLoadingRadioStations && (
                <p className="text-right text-currentRadioCaption md:text-xs">
                  Подождите, радио {chosenRadio?.name} загружается...
                </p>
              )}
              {isPlay && !isLoadingRadioStations && (
                <p className="text-right text-currentRadioCaption md:text-xs">
                  Вы слушаете {chosenRadio?.name}
                </p>
              )}
            </div>
            <Container></Container>
          </main>
        </>
      );
    default:
      return <p>{error}</p>;
  }
};

export type { Props };

export { Radios };
