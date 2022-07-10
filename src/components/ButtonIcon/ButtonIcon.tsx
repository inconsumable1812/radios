import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const ButtonIcon: FC<Props> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={`cursor-pointer`}>
      {children}
    </div>
  );
};

export { ButtonIcon };
