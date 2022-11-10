import { FC } from 'react';
import style from './Main.module.scss';

export const Main: FC<{ Element: FC }> = ({ Element }) => {
  return (
    <div className={style.main}>
      <Element />
    </div>
  );
};
