import Image from 'next/image';
import { FC } from 'react';

type Props = {
  name: string;
  variant: 'withImage' | 'withFlag' | 'text' | 'withColor';
  color?: string;
  url?: string;
};

const MatrixButton: FC<Props> = ({ name, variant, url = '', color = '' }) => {
  const border =
    variant === 'text' || variant === 'withFlag'
      ? 'border-0.5 border-solid border-neutral-200'
      : '';

  return (
    <div
      className={`h-15 w-15 md:h-20 md:w-20 shadow-matrix rounded-matrix cursor-pointer ${border}`}
    >
      {variant === 'withFlag' &&
        (url ? (
          <div className=" h-full flex flex-col items-center justify-center">
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
        ))}
      {variant === 'withImage' && (
        <Image
          src={url}
          alt={name}
          layout="responsive"
          height="10"
          width="10"
        ></Image>
      )}
      {variant === 'text' && (
        <div className="h-full flex items-center justify-center">
          <p className="text-center font-semibold text-buttonText">{name}</p>
        </div>
      )}
      {variant === 'withColor' && (
        <div className="bg-brandOrange rounded-matrix h-full flex items-center justify-center">
          <p className="text-white text-center font-semibold text-buttonText">
            {name}
          </p>
        </div>
      )}
    </div>
  );
};

export { MatrixButton };
