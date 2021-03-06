import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = { onClick: () => void };

const CancelIcon: FC<Props> = ({ onClick }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </ButtonIcon>
  );
};

export { CancelIcon };
