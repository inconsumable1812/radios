import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { RadioStation } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { MatrixButton } from 'src/components';
import {
  changeIsLoadingRadioStation,
  changeIsPlay,
  choseCurrentRadio,
  selectData,
} from 'src/features/Radios/redux/slice';

type Props = {
  url: string;
  name: string;
  radio: RadioStation;
  src: string;
};

const RadioButton: FC<Props> = ({ url, name, radio, src }) => {
  const [isClicked, setIsClicked] = useState(false);
  const audioContainer = useRef<HTMLAudioElement>(null);

  const dispatch = useAppDispatch();
  const { volume } = useAppSelector(selectData);
  const style = isClicked
    ? 'outline-[6px] outline outline-activeRadioButton'
    : 'outline-0';

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    if (isClicked) {
      dispatch(choseCurrentRadio(radio));
      if (audioContainer.current !== null) {
        audioContainer.current.play().then(() => {
          dispatch(changeIsPlay(true));
          dispatch(changeIsLoadingRadioStation(false));
        });
        audioContainer.current.volume = +volume / 100;
        dispatch(changeIsLoadingRadioStation(true));
      }
    } else {
      dispatch(changeIsPlay(false));
      dispatch(choseCurrentRadio(null));
      if (audioContainer.current !== null) {
        audioContainer.current.pause();
      }
    }
  }, [isClicked]);

  useEffect(() => {
    if (audioContainer.current !== null) {
      audioContainer.current.volume = +volume / 100;
    }
  }, [volume]);

  return (
    <MatrixButton onClick={handleClick}>
      <div className={`rounded-matrix ${style} `}>
        <Image
          className="rounded-matrix"
          src={url}
          alt={name}
          layout="responsive"
          height="10"
          width="10"
        ></Image>
      </div>
      <audio ref={audioContainer} src={src}></audio>
    </MatrixButton>
  );
};

export { RadioButton };
