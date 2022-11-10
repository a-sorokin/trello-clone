import { TBoardColumn } from 'types/types';
import { FC, useCallback, useRef, useState } from 'react';
import s from './NewList.module.scss';
import { v4 as uuidv4 } from 'uuid';

export const NewList: FC<{
  addList: (list: TBoardColumn) => void;
  position: number;
}> = ({ addList, position }) => {
  const [editMode, setEditMode] = useState(false);
  const ref = useRef<any>(null);

  const editHandler = useCallback(() => {
    setEditMode(true);
  }, []);

  const addClickHandler = useCallback(() => {
    const title = ref.current.value;
    if (!title) return;

    addList({
      id: uuidv4(),
      name: title,
      position,
    });
    setEditMode(false);
  }, [addList, position, setEditMode]);

  return (
    <div className={s.newList} onClick={editHandler} ref={ref}>
      {editMode ? (
        <div>
          <input type="text" placeholder="Enter list title" ref={ref} />
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