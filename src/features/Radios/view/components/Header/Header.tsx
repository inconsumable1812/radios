import { FC, useEffect, useState } from 'react';
import {
  BurgerIcon,
  CancelIcon,
  DislikeIcon,
  LikeIcon,
  PlayIcon,
  SearchIcon,
  SkipIcon,
  UnionIcon,
  Input,
} from 'src/components';

type Props = {};

const Header: FC<Props> = ({}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  const HandleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

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

  switch (isDesktop) {
    case true:
      return (
        <header className="my-2 mx-5">
          <div className="flex items-center justify-between">
            <BurgerIcon></BurgerIcon>
            {isPlay && (
              <div className="flex items-center gap-x-5">
                <LikeIcon></LikeIcon>
                <PlayIcon></PlayIcon>
                <DislikeIcon></DislikeIcon>
                <SkipIcon></SkipIcon>
                <UnionIcon></UnionIcon>
              </div>
            )}
            <div className="flex items-center gap-x-2">
              <Input></Input>
              {isSearching ? (
                <CancelIcon></CancelIcon>
              ) : (
                <SearchIcon></SearchIcon>
              )}
            </div>
          </div>
        </header>
      );

    default:
      return (
        <header className="my-2 mx-5">
          <div className="flex items-center justify-between">
            <BurgerIcon></BurgerIcon>
            {!isSearching && (
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
              <CancelIcon></CancelIcon>
            ) : (
              <SearchIcon></SearchIcon>
            )}
          </div>
        </header>
      );
  }
};

export { Header };
