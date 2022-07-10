import { FC } from 'react';
import Image from 'next/image';
import { MatrixButton } from 'src/components';

type Props = {
  name: string;
  url?: string;
};

const CountryButton: FC<Props> = ({ name, url = '' }) => {
  return (
    <MatrixButton>
      {url ? (
        <div className=" h-full flex flex-col items-center justify-center border-0.5 border-solid border-neutral-200 rounded-matrix">
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
        <div className="h-full flex items-center justify-center">
          <p className="text-center font-semibold text-buttonText">{name}</p>
        </div>
      )}
    </MatrixButton>
  );
};

export { CountryButton };
