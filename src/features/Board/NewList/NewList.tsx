import { TBoardColumn } from 'types/types';
import { FC, useCallback, useRef, useState } from 'react';
import s from './NewList.module.scss';
import { v4 as uuidv4 } from 'uuid';

export const NewList: FC<{
  addList: (list: TBoardColumn) => void;
  position: number;
}> = ({ addList, position }) => {
  const [editMode, setEditMode] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const editHandler = useCallback(() => {
    setEditMode(true);
  }, []);

  const addClickHandler = useCallback(() => {
    const title = ref?.current?.value;
    setEditMode(false);
    if (!title) return;

    addList({
      id: uuidv4(),
      name: title,
      position,
    });
  }, [addList, position, setEditMode]);

  return (
    <div className={s.newList} onClick={editHandler} ref={ref}>
      {editMode ? (
        <div>
          <input
            type="text"
            placeholder="Enter list title"
            ref={ref}
            autoFocus
          />
          <button
            onClick={e => {
              e.stopPropagation();
              addClickHandler();
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <div>+ Add another list</div>
      )}
    </div>
  );
};
