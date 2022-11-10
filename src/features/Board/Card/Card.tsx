import { FC, useCallback, useRef, useState } from 'react';
import s from './Card.module.scss';
import { EditCard } from 'features/Board/Card/EditCard';
import { TCard } from 'types/types';
// import { OpenedCard } from 'features/Board/OpenedCard/OpenedCard';

export const Card: FC<{
  card: TCard;
  changeCardName: (name: string) => void;
  first: boolean;
  last: boolean;
  moveCard: (dir: 'right' | 'left') => void;
}> = ({ card, changeCardName, first, last, moveCard }) => {
  const [changeMode, setChangeMode] = useState(false);
  // const [cardIsOpen, setCardIsOpen] = useState(false);
  const ref = useRef<any>(null);

  const editNameHandler = useCallback(() => {
    const name = ref.current.value.trim();
    setChangeMode(false);
    if (!name) return;
    changeCardName(name);
  }, [changeCardName]);

  // const openCardHandler = useCallback(() => {
  //   if (!changeMode) {
  //     setCardIsOpen(true);
  //   }
  // }, [changeMode]);
  //
  // const closeCard = useCallback(() => {
  //   setCardIsOpen(false);
  // }, []);

  return (
    <>
      <div className={s.card}>
        {changeMode ? (
          <EditCard refVal={ref} name={card.name} handler={editNameHandler} />
        ) : (
          <>
            <div className={s.cardNameLine}>
              <span>{card.name}</span>
              <span
                className={s.edit}
                onClick={e => {
                  e.stopPropagation();
                  setChangeMode(true);
                }}
              >
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
      {/*{cardIsOpen && <OpenedCard closeCard={closeCard} />}*/}
    </>
  );
};
