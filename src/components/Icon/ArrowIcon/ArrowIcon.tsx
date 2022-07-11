import { FC } from 'react';
import { ButtonIcon } from 'src/components';

type Props = {
  variant: 'left' | 'right' | 'top' | 'bottom';
  disabled?: boolean;
  hide?: boolean;
  onClick?: () => void;
};

const ArrowIcon: FC<Props> = ({
  variant,
  disabled = false,
  hide = false,
  onClick = () => {},
}) => {
  let direction = null;
  switch (variant) {
    case 'left':
      direction = '';
      break;
    case 'right':
      direction = 'rotate-180';
      break;
    case 'top':
      direction = 'rotate-90';
      break;
    case 'bottom':
      direction = 'rotate-[270deg]';
      break;
  }
  const opacity = disabled ? 'opacity-40' : 'opacity-100';
  const display = hide ? 'hidden' : 'block';

  return (
    <ButtonIcon onClick={onClick}>
      <svg
        className={`${direction} ${opacity} ${display} z-10`}
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="#C6C6C6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            r="17"
            transform="matrix(-1 0 0 1 17.5 17.5)"
            fill="#C6C6C6"
            stroke="#C6C6C6"
          />
          <path
            d="M18.6679 7.9453C18.9743 7.48577 19.5952 7.3616 20.0547 7.66795C20.5142 7.9743 20.6384 8.59517 20.332 9.0547L18.6679 7.9453ZM20.3321 25.9453C20.6384 26.4048 20.5142 27.0257 20.0547 27.3321C19.5952 27.6384 18.9743 27.5142 18.6679 27.0547L20.3321 25.9453ZM13.5 17.5L12.668 18.0547L12.2982 17.5L12.668 16.9453L13.5 17.5ZM20.332 9.0547L14.3321 18.0547L12.668 16.9453L18.6679 7.9453L20.332 9.0547ZM14.3321 16.9453L20.3321 25.9453L18.6679 27.0547L12.668 18.0547L14.3321 16.9453Z"
            fill="black"
          />
        </g>
      </svg>
    </ButtonIcon>
  );
};

export { ArrowIcon };
