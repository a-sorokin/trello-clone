import { FC, ReactElement } from 'react';
import s from './List.module.scss';

export const List: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className={s.list}>
      <div className={s.container}>{children}</div>
    </div>
  );
};
