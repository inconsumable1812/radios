import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = { onClick?: () => void };

const PlayIcon: FC<Props> = ({ onClick = () => {} }) => {
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
          d="M35 22.5C35 31.8888 27.3888 39.5 18 39.5C8.61116 39.5 1 31.8888 1 22.5C1 13.1112 8.61116 5.5 18 5.5C27.3888 5.5 35 13.1112 35 22.5Z"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12.3628 14.8819C12.3628 13.9147 13.4141 13.314 14.2474 13.805L26.8867 21.2525C27.7072 21.736 27.7072 22.9229 26.8867 23.4064L14.2474 30.8539C13.4141 31.3449 12.3628 30.7442 12.3628 29.777V14.8819Z"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
    </ButtonIcon>
  );
};

export { PlayIcon };
