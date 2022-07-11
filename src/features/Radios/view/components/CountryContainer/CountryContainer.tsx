import { FC, useEffect, useRef, useState } from 'react';
import { Country } from 'src/api';
import { ArrowIcon } from 'src/components';
import { calculateHeight } from 'src/features/Radios/utils/calculateHeight';
import { CountryButton } from '../CountryButton/CountryButton';

type Props = { countries: Country[] };

const CountryContainer: FC<Props> = ({ countries }) => {
  const [isShouldHide, setIsShouldHide] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [calculatedHeight, setCalculatedHeight] = useState(0);
  const [shouldDisabledBottom, setShouldDisabledBottom] = useState(true);
  const [shouldDisabledTop, setShouldDisabledTop] = useState(false);
  const scrollTop = useRef(0);

  const countryContainer = useRef<HTMLDivElement>(null);
  const countryFlex = useRef<HTMLDivElement>(null);

  const isExist =
    countryContainer.current !== null && countryFlex.current !== null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (isExist) {
          const shouldHide =
            countryContainer.current.clientHeight ===
            countryFlex.current.clientHeight;

          setIsShouldHide(shouldHide);
        }

        const computedHeight = calculateHeight({
          documentHeight: document.body.clientHeight,
          isDesktop,
        });
        setCalculatedHeight(computedHeight);
      };

      const computedHeight = calculateHeight({
        documentHeight: document.body.clientHeight,
        isDesktop,
      });
      setCalculatedHeight(computedHeight);

      if (isExist) {
        const shouldHide =
          countryContainer.current.clientHeight ===
          countryFlex.current.clientHeight;

        setIsShouldHide(shouldHide);
      }
      window.addEventListener('resize', handleResize);

      const mediaQuery = window.matchMedia('(min-width: 768px)');
      if (mediaQuery.matches) {
        setIsDesktop(mediaQuery.matches);
      }

      const handleMedia = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
      mediaQuery.addEventListener('change', handleMedia);

      return () => {
        mediaQuery.removeEventListener('change', handleMedia);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isDesktop, isExist]);

  const handleButtonClickBottom = () => {
    if (isExist) {
      countryContainer.current.scrollBy({
        left: 0,
        top: -100,
        behavior: 'smooth',
      });

      setShouldDisabledBottom(false);
      if (
        countryContainer.current.scrollTop === scrollTop.current &&
        scrollTop.current !== 0
      ) {
        setShouldDisabledTop(true);
      }

      console.log(countryFlex.current.scrollTop);

      scrollTop.current = countryContainer.current.scrollHeight;
    }
  };

  const handleButtonClickTop = () => {
    if (isExist) {
      countryContainer.current.scrollBy({
        left: 0,
        top: 100,
        behavior: 'smooth',
      });
      setShouldDisabledTop(false);

      if (countryContainer.current.scrollTop === 0) {
        setShouldDisabledBottom(true);
      }
    }
  };

  return (
    <div className="grid relative">
      <div
        style={{ height: `${calculatedHeight.toString()}px` }}
        ref={countryContainer}
        className="grid overflow-auto h-full"
      >
        <div
          ref={countryFlex}
          className={`flex flex-col gap-3.5 md:gap-3.75 xl:gap-3 h-full`}
        >
          {countries.map((country) => (
            <CountryButton
              key={country.id}
              url={country.img}
              name={country.name}
            ></CountryButton>
          ))}
        </div>
      </div>
      <div className="hidden md:block absolute top-0 translate-y-[-50%] left-1/2 translate-x-[-50%]">
        <ArrowIcon
          disabled={shouldDisabledBottom}
          variant="top"
          hide={isShouldHide}
          onClick={handleButtonClickBottom}
        ></ArrowIcon>
      </div>
      <div className="absolute hidden md:block top-full translate-y-[-50%] left-1/2 translate-x-[-50%]">
        <ArrowIcon
          disabled={shouldDisabledTop}
          hide={isShouldHide}
          variant="bottom"
          onClick={handleButtonClickTop}
        ></ArrowIcon>
      </div>
    </div>
  );
};

export { CountryContainer };
