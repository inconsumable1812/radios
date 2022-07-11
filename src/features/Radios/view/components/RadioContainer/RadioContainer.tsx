import { FC, useEffect, useRef, useState } from 'react';
import { RadioStation } from 'src/api';
import { calculateHeight } from 'src/features/Radios/utils/calculateHeight';

import { RadioButton } from '../RadioButton/RadioButton';

type Props = {
  radioStations: RadioStation[];
  radioBackground: 'bg-filteredRadio' | 'bg-transparent';
};

const RadioContainer: FC<Props> = ({ radioStations, radioBackground }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [calculatedHeight, setCalculatedHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
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
  }, [isDesktop]);

  return (
    <div
      style={{ height: `${calculatedHeight.toString()}px` }}
      className={`grid grid-cols-autoFill grid-rows-autoFill gap-3.5 md:grid-cols-autoFillMd md:grid-rows-autoFillMd md:gap-3.75 xl:gap-3 overflow-auto pl-1.5 ml-[-0.375rem] py-1.5 mt-[-0.375rem] ${radioBackground} rounded-matrix`}
    >
      {radioStations.map((radio) => (
        <RadioButton
          key={radio.id}
          radio={radio}
          url={radio.img}
          name={radio.name}
        ></RadioButton>
      ))}
    </div>
  );
};

export { RadioContainer };
