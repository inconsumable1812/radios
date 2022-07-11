import Image from 'next/image';
import { FC } from 'react';
import { RadioStation } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { MatrixButton } from 'src/components';
import { choseCurrentRadio, selectData } from 'src/features/Radios/redux/slice';

type Props = {
  url: string;
  name: string;
  radio: RadioStation;
};

const RadioButton: FC<Props> = ({ url, name, radio }) => {
  const dispatch = useAppDispatch();
  const { chosenRadio } = useAppSelector(selectData);

  const isCurrent = chosenRadio?.id === radio.id;

  const style = isCurrent
    ? 'outline-[6px] outline outline-activeRadioButton'
    : 'outline-0';

  const handleClick = () => {
    if (!isCurrent) {
      dispatch(choseCurrentRadio(radio));
      if (localStorage.getItem(radio.id.toString()) === null) {
        localStorage.setItem(radio.id.toString(), JSON.stringify(radio));
      }
    } else {
      dispatch(choseCurrentRadio(null));
    }
  };

  return (
    <MatrixButton onClick={handleClick}>
      <div className={`rounded-matrix ${style}`}>
        <Image
          className="rounded-matrix"
          src={url}
          alt={name}
          layout="responsive"
          height="10"
          width="10"
        ></Image>
      </div>
    </MatrixButton>
  );
};

export { RadioButton };
