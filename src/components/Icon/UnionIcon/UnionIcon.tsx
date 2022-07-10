import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = { onClick?: () => void };

const UnionIcon: FC<Props> = ({ onClick = () => {} }) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.0024 12.3C29.251 11.9687 29.7211 11.9015 30.0524 12.15C30.3838 12.3986 30.451 12.8687 30.2024 13.2L18.5262 28.7683C18.5 28.8033 18.4709 28.8357 18.4395 28.8652H29.6024C30.0166 28.8652 30.3524 29.201 30.3524 29.6152C30.3524 30.0294 30.0166 30.3652 29.6024 30.3652L6.25004 30.3652C5.83583 30.3652 5.50004 30.0294 5.50004 29.6152C5.50004 29.201 5.83583 28.8652 6.25004 28.8652L17.413 28.8652C17.3816 28.8357 17.3525 28.8033 17.3262 28.7683L5.65004 13.2C5.40152 12.8687 5.46867 12.3986 5.80004 12.15C6.13142 11.9015 6.60152 11.9687 6.85004 12.3L17.9262 27.0683L29.0024 12.3Z"
          fill="currentColor"
        />
      </svg>
    </ButtonIcon>
  );
};

export { UnionIcon };
