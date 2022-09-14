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
  changeIsPause,
} from './redux/slice';
import { Header } from './view/components/Header/Header';
import { Container } from './view/Container/Container';

type Props = {};

const Radios: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const {
    status,
    error,
    isPause,
    isPlay,
    chosenRadio,
    isLoadingRadioStations,
    volume,
  } = useAppSelector(selectData);
  const audioContainer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    dispatch(getRadioStations());
    dispatch(getGenres());
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (audioContainer.current === null) return;
    if (chosenRadio !== null) {
      audioContainer.current.play().then(() => {
        dispatch(changeIsLoadingRadioStation('play'));
        dispatch(changeIsPause(false));
      });
      audioContainer.current.volume = +volume / 100;
      dispatch(changeIsLoadingRadioStation('loading'));
    } else {
      dispatch(changeIsLoadingRadioStation('pause'));
      dispatch(changeIsPause(false));
      audioContainer.current.pause();
    }
  }, [chosenRadio, dispatch]);

  useEffect(() => {
    if (audioContainer.current === null) return;
    if (isPause) {
      audioContainer.current.pause();
      return;
    }

    audioContainer.current.play().then(() => {
      dispatch(changeIsLoadingRadioStation('play'));
    });
    dispatch(changeIsLoadingRadioStation('loading'));
    audioContainer.current.volume = +volume / 100;
  }, [isPause]);

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
            {chosenRadio !== null && !isPause && (
              <audio ref={audioContainer} src={chosenRadio.src}></audio>
            )}
            <div className="my-2 min-h-[16px] self-end">
              {isLoadingRadioStations === 'loading' && (
                <p className="text-right text-currentRadioCaption md:text-xs">
                  Подождите, радио {chosenRadio?.name} загружается...
                </p>
              )}
              {isLoadingRadioStations === 'pause' && (
                <p className="text-right text-currentRadioCaption md:text-xs">
                  Радио {chosenRadio?.name} на паузе
                </p>
              )}
              {isLoadingRadioStations === 'play' && (
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
