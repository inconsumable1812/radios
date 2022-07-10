import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = { onClick?: () => void };

const SkipIcon: FC<Props> = ({ onClick = () => {} }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <svg
        className="text-black"
        width="36"
        height="45"
        viewBox="0 0 36 45"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.9332 12L15.0057 20.3539C15.3214 20.7269 15.3214 21.2733 15.0057 21.6462L7.9332 30.0002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.0563 12L21.1288 20.3539C21.4445 20.7269 21.4445 21.2733 21.1288 21.6462L14.0563 30.0002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20.1793 12L27.2518 20.3539C27.5675 20.7269 27.5675 21.2733 27.2518 21.6462L20.1793 30.0002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </ButtonIcon>
  );
};

export { SkipIcon };
