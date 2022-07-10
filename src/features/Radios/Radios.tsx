import { FC, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import { REQUEST_STATUS } from 'src/helpers/redux';
import { selectData } from './redux/selectors';
import { getRadioStations, getGenres, getCountries } from './redux/slice';
import { Header } from './view/components/Header/Header';
import { Container } from './view/Container/Container';

type Props = {};

const Radios: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { status, error, isPlay, currentRadioPlay, isLoadingRadioStations } =
    useAppSelector(selectData);

  useEffect(() => {
    dispatch(getRadioStations());
    dispatch(getGenres());
    dispatch(getCountries());
  }, [dispatch]);

  switch (status) {
    case REQUEST_STATUS.pending:
      return <p>Loading...</p>;
    case REQUEST_STATUS.fulfilled:
      return (
        <>
          <Header></Header>
          <main className="mx-2">
            <div className="my-2 min-h-[16px] self-end">
              {isLoadingRadioStations && (
                <p className="text-right text-currentRadioCaption md:text-xs">
                  Подождите, радио {currentRadioPlay?.name} загружается...
                </p>
              )}
              {isPlay && (
                <p className="text-right text-currentRadioCaption md:text-xs">
                  Вы слушаете {currentRadioPlay?.name}
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
