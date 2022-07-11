import { FC, useEffect, useRef, useState } from 'react';
import { Genre } from 'src/api';
import { ArrowIcon } from 'src/components';
import { GenreButton } from '../GenreButton/GenreButton';

type Props = { genres: Genre[] };

const GenreContainer: FC<Props> = ({ genres }) => {
  const [isShouldHide, setIsShouldHide] = useState(false);
  const [shouldDisabledLeft, setShouldDisabledLeft] = useState(true);
  const [shouldDisabledRight, setShouldDisabledRight] = useState(false);
  const scrollLeft = useRef(0);

  const genreContainer = useRef<HTMLDivElement>(null);
  const genreFlex = useRef<HTMLDivElement>(null);

  const isExist = genreContainer.current !== null && genreFlex.current !== null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (isExist) {
          const shouldHide =
            genreContainer.current.clientWidth ===
            genreFlex.current.clientWidth;

          setIsShouldHide(shouldHide);
        }
      };
      if (isExist) {
        const shouldHide =
          genreContainer.current.clientWidth === genreFlex.current.clientWidth;

        setIsShouldHide(shouldHide);
      }
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isExist]);

  const handleButtonClickRight = () => {
    if (isExist) {
      genreContainer.current.scrollBy({
        left: 100,
        top: 0,
        behavior: 'smooth',
      });

      setShouldDisabledLeft(false);
      if (
        genreContainer.current.scrollLeft === scrollLeft.current &&
        scrollLeft.current !== 0
      ) {
        setShouldDisabledRight(true);
      }

      scrollLeft.current = genreContainer.current.scrollLeft;
    }
  };

  const handleButtonClickLeft = () => {
    if (isExist) {
      genreContainer.current.scrollBy({
        left: -100,
        top: 0,
        behavior: 'smooth',
      });
      setShouldDisabledRight(false);

      if (genreContainer.current.scrollLeft === 0) {
        setShouldDisabledLeft(true);
      }
    }
  };

  return (
    <div className="grid relative">
      <div className="hidden md:block absolute top-1/2 translate-y-[-50%] left-0 translate-x-[-50%]">
        <ArrowIcon
          disabled={shouldDisabledLeft}
          variant="left"
          hide={isShouldHide}
          onClick={handleButtonClickLeft}
        ></ArrowIcon>
      </div>
      <div ref={genreContainer} className="grid overflow-auto w-full">
        <div
          ref={genreFlex}
          className={`flex  gap-3.5 md:gap-3.75 xl:gap-3 pr-1`}
        >
          {genres.map((genre) => (
            <GenreButton key={genre.id} name={genre.name}></GenreButton>
          ))}
        </div>
      </div>
      <div className="absolute hidden md:block top-1/2 translate-y-[-50%] left-full translate-x-[-50%]">
        <ArrowIcon
          disabled={shouldDisabledRight}
          hide={isShouldHide}
          variant="right"
          onClick={handleButtonClickRight}
        ></ArrowIcon>
      </div>
    </div>
  );
};

export { GenreContainer };
