import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  BurgerIcon,
  CancelIcon,
  PlayIcon,
  SearchIcon,
  PauseIcon,
} from 'src/components';
import {
  changeIsLoadingRadioStation,
  changeIsPause,
  changeSearchValue,
  selectData,
} from 'src/features/Radios/redux/slice';
import { Input } from '../Input/Input';
import { Slider } from '../Slider/Slider';

type Props = {};

const Header: FC<Props> = ({}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const dispatch = useAppDispatch();
  const { searchValue, isPlay, isPause } = useAppSelector(selectData);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      if (mediaQuery.matches) {
        setIsDesktop(mediaQuery.matches);
      }

      const handleMedia = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
      mediaQuery.addEventListener('change', handleMedia);

      return () => mediaQuery.removeEventListener('change', handleMedia);
    }
  }, []);

  const handleDesktopSearchClick = () => {
    dispatch(changeSearchValue(''));
  };

  const handleCancelClick = () => {
    dispatch(changeSearchValue(''));
    setIsSearching(false);
  };
  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handlePauseClick = () => {
    dispatch(changeIsPause(!isPause));
    if (!isPause) {
      dispatch(changeIsLoadingRadioStation('pause'));
    }
  };

  switch (isDesktop) {
    case true:
      return (
        <header className="flex items-center mx-5 min-h-[55px]">
          <div className="flex items-center justify-between w-full">
            <BurgerIcon></BurgerIcon>
            {isPlay && (
              <div className="flex items-center gap-x-5">
                <Slider></Slider>
                <div
                  className="h-11 w-11 flex items-center justify-center"
                  onClick={handlePauseClick}
                >
                  {isPause ? <PauseIcon></PauseIcon> : <PlayIcon></PlayIcon>}
                </div>
              </div>
            )}
            <div className="flex items-center gap-x-2">
              <Input></Input>
              {searchValue.trim().length !== 0 ? (
                <CancelIcon onClick={handleDesktopSearchClick}></CancelIcon>
              ) : (
                <SearchIcon></SearchIcon>
              )}
            </div>
          </div>
        </header>
      );

    default:
      return (
        <header className="flex items-center mx-5 min-h-[55px]">
          <div className="flex items-center justify-between w-full">
            <BurgerIcon></BurgerIcon>
            <div
              className="h-11 w-11 flex items-center justify-center"
              onClick={handlePauseClick}
            >
              {isPlay && (
                <>{isPause ? <PauseIcon></PauseIcon> : <PlayIcon></PlayIcon>}</>
              )}
            </div>
            {isSearching && <Input></Input>}
            {isSearching ? (
              <CancelIcon onClick={handleCancelClick}></CancelIcon>
            ) : (
              <SearchIcon onClick={handleSearchClick}></SearchIcon>
            )}
          </div>
        </header>
      );
  }
};

export { Header };
