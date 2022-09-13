import { FC } from 'react';

import styles from './Loader.module.scss';

type Props = {};

const Loader: FC<Props> = () => {
  return (
    <div className={styles.lds}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loader };
