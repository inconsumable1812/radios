import { FC } from 'react';
import { RadioStation } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { MatrixButton } from 'src/components';
import {
  changeBestRadioStations,
  changeFilteredStations,
  changeIsShowBestRadio,
  changeSearchValue,
  selectData,
} from 'src/features/Radios/redux/slice';

type Props = {
  name?: string;
};

const MyBestButton: FC<Props> = ({ name = 'My Best' }) => {
  const dispatch = useAppDispatch();
  const { bestRadioStations, allRadioStation, isShowBestRadio } =
    useAppSelector(selectData);

  const style = isShowBestRadio
    ? 'outline-[6px] outline outline-indigo-800'
    : 'outline-0';

  const handleClick = () => {
    if (isShowBestRadio === false) {
      const IDs = Object.keys(localStorage);
      const bestRadios: RadioStation[] = [];

      for (let id of IDs) {
        const radioJSON = localStorage.getItem(id);
        if (radioJSON !== null) {
          const radioObject = JSON.parse(radioJSON);
          if (radioObject.genre !== undefined) {
            bestRadios.push(radioObject);
          }
        }
      }
      if (JSON.stringify(bestRadioStations) !== JSON.stringify(bestRadios)) {
        dispatch(changeBestRadioStations(bestRadios));
      }
      dispatch(changeSearchValue(''));
      dispatch(changeIsShowBestRadio(true));
      dispatch(changeFilteredStations(bestRadios));
    } else {
      dispatch(changeSearchValue(''));
      dispatch(changeFilteredStations(allRadioStation));
      dispatch(changeIsShowBestRadio(false));
    }
  };

  return (
    <MatrixButton>
      <div
        onClick={handleClick}
        className={`bg-brandOrange rounded-matrix h-full flex items-center justify-center ${style}`}
      >
        <p className="text-white text-center font-semibold text-buttonText">
          {name}
        </p>
      </div>
    </MatrixButton>
  );
};

export { MyBestButton };
