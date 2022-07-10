import { FC, SyntheticEvent, useEffect, useState } from 'react';

type Props = {
  onInput?: (value: string) => void;
};

const Input: FC<Props> = ({ onInput }) => {
  const [value, setValue] = useState('');

  const handleInput = (e: SyntheticEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <input
      className="border-b-2 border-gray-400 border-solid focus:border-blue-400 focus:outline-none"
      value={value}
      onInput={handleInput}
    ></input>
  );
};

export { Input };
