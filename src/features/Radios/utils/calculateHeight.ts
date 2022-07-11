import {
  BEST_BUTTON_HEIGHT,
  BEST_BUTTON_HEIGHT_MOBILE,
  HEADER_HEIGHT,
  RADIO_TITLE_HEIGHT,
} from '../constants';

type Arguments = {
  documentHeight: number;
  isDesktop: boolean;
};

const calculateHeight = ({ documentHeight, isDesktop = true }: Arguments) => {
  const correctionHeight = isDesktop ? 55 : 35;

  const calculatedHeight = isDesktop
    ? documentHeight -
      HEADER_HEIGHT -
      RADIO_TITLE_HEIGHT -
      BEST_BUTTON_HEIGHT -
      correctionHeight
    : documentHeight -
      HEADER_HEIGHT -
      RADIO_TITLE_HEIGHT -
      BEST_BUTTON_HEIGHT_MOBILE -
      correctionHeight;

  return calculatedHeight;
};

export { calculateHeight };
