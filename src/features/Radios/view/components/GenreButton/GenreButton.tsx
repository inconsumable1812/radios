import { FC } from 'react';
import { MatrixButton } from 'src/components';

type Props = {
  name: string;
};

const GenreButton: FC<Props> = ({ name }) => {
  return (
    <MatrixButton>
      <div className="h-full flex items-center justify-center border-0.5 border-solid border-neutral-200 rounded-matrix">
        <p className="text-center font-semibold text-buttonText">{name}</p>
      </div>
    </MatrixButton>
  );
};

export { GenreButton };
