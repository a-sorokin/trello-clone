import { FC } from 'react';
import style from './Header.module.scss';

export const Header: FC<{ Element: FC }> = ({ Element }) => {
  return (
    <div className={style.header}>
      <Element />
    </div>
  );
};
