import { FC, useCallback, useRef, useState } from 'react';
import s from './Card.module.scss';

export const Card: FC<{
  name: string;
  changeCardName: (name: string) => void;
}> = ({ name, changeCardName }) => {
  const [changeMode, setChangeMode] = useState(false);
  const ref = useRef<any>(null);

  const handler = useCallback(() => {
    const name = ref.current.value.trim();
    setChangeMode(false);
    if (!name) return;
    changeCardName(name);
  }, [changeCardName]);

  return (
    <div className={s.card}>
      {changeMode ? (
        <div>
          <input
            className={s.input}
            type="text"
            ref={ref}
            placeholder={name}
            autoFocus
          />
          <button
            onClick={e => {
              e.stopPropagation();
              handler();
            }}
          >
            Ok
          </button>
        </div>
      ) : (
        <>
          <span>{name}</span>
          <span className={s.edit} onClick={() => setChangeMode(true)}>
            ✎
          </span>
        </>
      )}
    </div>
  );
};
