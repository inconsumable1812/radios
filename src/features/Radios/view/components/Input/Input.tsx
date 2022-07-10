import { FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { selectData } from 'src/features/Radios/redux/selectors';
import { changeSearchValue } from 'src/features/Radios/redux/slice';

type Props = {};

const Input: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector(selectData);

  const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(changeSearchValue(e.currentTarget.value));
  };

  return (
    <input
      className="border-b-2 border-gray-400 border-solid focus:border-blue-400 focus:outline-none flex-grow xl:flex-grow-0 mx-2 xl:mx-0"
      value={searchValue}
      onInput={handleInput}
    ></input>
  );
};

export { Input };
