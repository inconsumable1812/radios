import Image from 'next/image';
import { FC } from 'react';
import { MatrixButton } from 'src/components';

type Props = {
  url: string;
  name: string;
};

const RadioButton: FC<Props> = ({ url, name }) => {
  return (
    <MatrixButton>
      <Image
        className="rounded-matrix"
        src={url}
        alt={name}
        layout="responsive"
        height="10"
        width="10"
      ></Image>
    </MatrixButton>
  );
};

export { RadioButton };
