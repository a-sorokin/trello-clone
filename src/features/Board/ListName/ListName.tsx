import { FC, useCallback, useRef, useState } from 'react';
import s from './ListName.module.scss';

export const ListName: FC<{
  name: string;
  changeNameHandler: (name: string) => void;
}> = ({ name, changeNameHandler }) => {
  const [changeMode, setChangeMode] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handler = useCallback(() => {
    const name = ref?.current?.value.trim();
    setChangeMode(false);
    if (!name) return;
    changeNameHandler(name);
  }, [changeNameHandler]);

  return (
    <div className={s.listName} onClick={() => setChangeMode(true)}>
      {changeMode ? (
        <div>
          <input type="text" ref={ref} placeholder={name} autoFocus />
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
        name
      )}
    </div>
  );
};
