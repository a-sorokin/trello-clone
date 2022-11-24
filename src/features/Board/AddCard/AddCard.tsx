import s from './AddCard.module.scss';
import { FC, useCallback, useRef, useState } from 'react';

export const AddCard: FC<{
  addCard: (name: string) => void;
}> = ({ addCard }) => {
  const [addMode, setAddMode] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const addHandler = useCallback(() => {
    const name = ref?.current?.value.trim();
    setAddMode(false);
    if (!name) return;
    addCard(name);
  }, [addCard]);

  return (
    <div className={s.addCard} onClick={() => setAddMode(true)}>
      {addMode ? (
        <div className={s.add}>
          <input type="text" placeholder="Card name" autoFocus ref={ref} />
          <button
            onClick={e => {
              e.stopPropagation();
              addHandler();
            }}
          >
            Ok
          </button>
        </div>
      ) : (
        <span>Add card</span>
      )}
    </div>
  );
};
