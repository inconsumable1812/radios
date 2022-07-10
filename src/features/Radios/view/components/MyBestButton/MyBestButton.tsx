import { FC } from 'react';
import { MatrixButton } from 'src/components';

type Props = {
  name?: string;
};

const MyBestButton: FC<Props> = ({ name = 'My Best' }) => {
  return (
    <MatrixButton>
      <div
        className={`bg-brandOrange rounded-matrix h-full flex items-center justify-center`}
      >
        <p className="text-white text-center font-semibold text-buttonText">
          {name}
        </p>
      </div>
    </MatrixButton>
  );
};

export { MyBestButton };
