import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { MatrixButton } from 'src/components';
import { useAppDispatch } from 'src/app/hooks';
import { choseCountry } from 'src/features/Radios/redux/slice';

type Props = {
  name: string;
  url?: string;
};

const CountryButton: FC<Props> = ({ name, url = '' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useAppDispatch();

  const style = isClicked
    ? 'bg-activeButton border-activeButton text-white'
    : 'bg-transparent border-neutral-200 text-black';

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    if (isClicked) {
      dispatch(choseCountry(name));
    } else {
      dispatch(choseCountry(null));
    }
  }, [isClicked]);

  return (
    <MatrixButton onClick={handleClick}>
      {url ? (
        <div
          className={`h-full flex flex-col items-center justify-center border-0.5 border-solid rounded-matrix ${style}`}
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
