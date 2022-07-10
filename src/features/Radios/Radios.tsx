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
  const { status, error } = useAppSelector(selectData);

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
          <main>
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
