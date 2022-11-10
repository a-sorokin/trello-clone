import { FC } from 'react';
import s from './Card.module.scss';

export const Card: FC<{ name: string }> = ({ name }) => {
  return <div className={s.card}>{name}</div>;
};
