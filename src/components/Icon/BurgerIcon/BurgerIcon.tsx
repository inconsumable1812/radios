import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = {
  onClick?: () => void;
};

const BurgerIcon: FC<Props> = ({ onClick = () => {} }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 text-brandBlue"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </ButtonIcon>
  );
};

export { BurgerIcon };
