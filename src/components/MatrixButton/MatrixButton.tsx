import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const MatrixButton: FC<Props> = ({ children }) => {
  return (
    <div
      className={`h-15 w-15 md:h-20 md:w-20 shadow-matrix rounded-matrix cursor-pointer`}
    >
      {children}
    </div>
  );
};

export { MatrixButton };
