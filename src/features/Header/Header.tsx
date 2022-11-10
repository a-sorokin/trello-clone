import { FC } from 'react';
import s from './Header.module.scss';

export const Header: FC<{ logout: () => void; goHome: () => void }> = ({
  logout,
  goHome,
}) => (
  <div className={s.header}>
    <span className={s.logo} onClick={goHome}>
      Trello
    </span>
    <button onClick={logout}>Log out</button>
  </div>
);
