import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const MatrixButton: FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <div
      className={`h-15 w-15 md:h-20 md:w-20 shadow-matrix rounded-matrix cursor-pointer select-none`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { MatrixButton };
