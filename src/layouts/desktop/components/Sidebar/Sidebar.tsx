import { FC } from 'react';
import style from 'layouts/desktop/components/Sidebar/Sidebar.module.scss';

export const Sidebar: FC<{ Element: FC }> = ({ Element }) => {
  return (
    <div className={style.sidebar}>
      <Element />
    </div>
  );
};
