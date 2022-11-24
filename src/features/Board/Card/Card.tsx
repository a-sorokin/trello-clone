import { FC, useCallback, useRef, useState } from 'react';
import s from './Card.module.scss';
import { EditCard } from 'features/Board/Card/EditCard';
import { TCard } from 'types/types';

export const Card: FC<{
  card: TCard;
  changeCardName: (name: string) => void;
  first: boolean;
  last: boolean;
  moveCard: (dir: 'right' | 'left') => void;
}> = ({ card, changeCardName, first, last, moveCard }) => {
  const [changeMode, setChangeMode] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const editNameHandler = useCallback(() => {
    const name = ref?.current?.value.trim();
    setChangeMode(false);
    if (!name) return;
    changeCardName(name);
  }, [changeCardName]);

  return (
    <>
      <div className={s.card}>
        {changeMode ? (
          <EditCard refVal={ref} name={card.name} handler={editNameHandler} />
        ) : (
          <>
            <div className={s.cardNameLine}>
              <span>{card.name}</span>
              <span className={s.edit} onClick={() => setChangeMode(true)}>
                ✎
              </span>
            </div>
            <div className={s.moveCardButtons}>
              <button disabled={first} onClick={() => moveCard('left')}>
                Prev
              </button>
              <button disabled={last} onClick={() => moveCard('right')}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
