import s from './OpenedCard.module.scss';
import { FC } from 'react';

export const OpenedCard: FC<{ closeCard: () => void }> = ({ closeCard }) => {
  return (
    <>
      <div className={s.openedCardWrapper} />
      <div className={s.openedCard}>
        <div className={s.close} onClick={closeCard}></div>
        <div className={s.content}>
          <div>Name</div>
          <div>Description</div>
        </div>
      </div>
    </>
  );
};
