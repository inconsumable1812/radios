import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { MatrixButton } from 'src/components';
import { choseGenre, selectData } from 'src/features/Radios/redux/slice';

type Props = {
  name: string;
};

const GenreButton: FC<Props> = ({ name }) => {
  const dispatch = useAppDispatch();
  const { chosenGenre } = useAppSelector(selectData);

  const isCurrent = chosenGenre === name;

  const style = isCurrent
    ? 'bg-activeButton border-activeButton text-white'
    : 'bg-transparent border-neutral-200 text-black';

  const handleClick = () => {
    if (!isCurrent) {
      dispatch(choseGenre(name));
    } else {
      dispatch(choseGenre(null));
    }
  };

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
