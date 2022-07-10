import { FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { changeVolume, selectData } from 'src/features/Radios/redux/slice';

type Props = {};

const Slider: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { volume } = useAppSelector(selectData);

  const handleChangeValue = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(changeVolume(e.currentTarget.value));
  };

  return (
    <input
      className="w-16"
      type="range"
      value={volume}
      onChange={handleChangeValue}
    ></input>
  );
};

export { Slider };
