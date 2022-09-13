import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  BurgerIcon,
  CancelIcon,
  DislikeIcon,
  LikeIcon,
  PlayIcon,
  SearchIcon,
  SkipIcon,
  UnionIcon,
  ButtonIcon,
} from 'src/components';
import { changeSearchValue, selectData } from 'src/features/Radios/redux/slice';
import { Input } from '../Input/Input';
import { Slider } from '../Slider/Slider';

type Props = {};

const Header: FC<Props> = ({}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const dispatch = useAppDispatch();
  const { searchValue, isPlay } = useAppSelector(selectData);

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

  switch (isDesktop) {
    case true:
      return (
        <header className="flex items-center mx-5 min-h-[55px]">
          <div className="flex items-center justify-between w-full">
            <BurgerIcon></BurgerIcon>
            {isPlay && (
              <div className="flex items-center gap-x-5">
                <Slider></Slider>
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
            {isPlay && (
              <>
                <LikeIcon></LikeIcon>
                <PlayIcon></PlayIcon>
                <DislikeIcon></DislikeIcon>
                <SkipIcon></SkipIcon>
                <UnionIcon></UnionIcon>
              </>
            )}
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
