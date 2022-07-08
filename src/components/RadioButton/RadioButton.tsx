import Image from 'next/image';
import { FC } from 'react';

type Props = {
  url: string;
  name: string;
};

const ButtonContainer: FC<Props> = ({ url, name }) => {
  return (
    <button className="h-15 w-15">
      <Image
        src={url}
        alt={name}
        layout="responsive"
        height="10"
        width="10"
      ></Image>
    </button>
  );
};

export { ButtonContainer };
