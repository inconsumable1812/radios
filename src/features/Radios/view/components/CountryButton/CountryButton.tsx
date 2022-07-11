import { FC } from 'react';
import Image from 'next/image';
import { MatrixButton } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { choseCountry, selectData } from 'src/features/Radios/redux/slice';

type Props = {
  name: string;
  url?: string;
};

const CountryButton: FC<Props> = ({ name, url = '' }) => {
  const dispatch = useAppDispatch();
  const { chosenCountry } = useAppSelector(selectData);

  const isCurrent = chosenCountry === name;

  const style = isCurrent
    ? 'border-0.5 bg-activeButton border-activeButton text-white'
    : 'border-0.5 bg-transparent border-neutral-200 text-black';

  const handleClick = () => {
    if (!isCurrent) {
      dispatch(choseCountry(name));
    } else {
      dispatch(choseCountry(null));
    }
  };

  return (
    <MatrixButton onClick={handleClick}>
      {url ? (
        <div
          className={`h-full flex flex-col items-center justify-center  border-solid rounded-matrix ${style}`}
        >
          <div className="h-7 w-7 md:h-10 md:w-10">
            <Image
              src={url}
              alt={name}
              layout="responsive"
              height="10"
              width="10"
            ></Image>
          </div>
          <p className="text-center font-semibold text-flagCaption">{name}</p>
        </div>
      ) : (
        <div
          className={`h-full flex items-center justify-center rounded-matrix ${style}`}
        >
          <p className="text-center font-semibold text-buttonText">{name}</p>
        </div>
      )}
    </MatrixButton>
  );
};

export { CountryButton };
