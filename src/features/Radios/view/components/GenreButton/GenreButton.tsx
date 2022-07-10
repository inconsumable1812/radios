import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { MatrixButton } from 'src/components';
import { choseGenre } from 'src/features/Radios/redux/slice';

type Props = {
  name: string;
};

const GenreButton: FC<Props> = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useAppDispatch();

  const style = isClicked
    ? 'bg-activeButton border-activeButton text-white'
    : 'bg-transparent border-neutral-200 text-black';

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    if (isClicked) {
      dispatch(choseGenre(name));
    } else {
      dispatch(choseGenre(null));
    }
  }, [isClicked]);

  return (
    <MatrixButton onClick={handleClick}>
      <div
        className={`h-full flex items-center justify-center border-0.5 border-solid rounded-matrix   ${style}`}
      >
        <p className="text-center font-semibold text-buttonText">{name}</p>
      </div>
    </MatrixButton>
  );
};

export { GenreButton };
