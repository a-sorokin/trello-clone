import { FC, useCallback, useRef, useState } from 'react';

export const ListName: FC<{
  className: string;
  name: string;
  changeNameHandler: (name: string) => void;
}> = ({ className, name, changeNameHandler }) => {
  const [changeMode, setChangeMode] = useState(false);
  const ref = useRef<any>(null);

  const handler = useCallback(() => {
    const name = ref.current.value.trim();
    setChangeMode(false);
    if (!name) return;
    changeNameHandler(name);
  }, [changeNameHandler]);

  return (
    <div className={className} onClick={() => setChangeMode(true)}>
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
