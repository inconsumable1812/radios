import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = { onClick?: () => void };

const PauseIcon: FC<Props> = ({ onClick = () => {} }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </ButtonIcon>
  );
};

export { PauseIcon };
