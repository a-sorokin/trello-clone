import { FC, useCallback, useRef } from 'react';
import { TBoards } from 'types/types';
import s from './BoardsTable.module.scss';

export const BoardsTable: FC<{
  boards: TBoards;
  addBoard: (name: string) => void;
  setActiveBoard: (id: string) => void;
  workspaceName: string;
}> = ({ boards, addBoard, setActiveBoard, workspaceName }) => {
  const nameRef = useRef<any>(null);

  const addTableHandler = useCallback(() => {
    const name = nameRef.current.value;
    if (name) addBoard(name);
  }, [addBoard]);

  return (
    <div className={s.boards}>
      <div className={s.title}>{workspaceName}</div>

      <section className={s.addNew}>
        <div>Add board</div>
        <div>
          <label htmlFor="workspace-name">Name</label>
          <input
            type="text"
            name="name"
            id="workspace-name"
            ref={nameRef}
            autoFocus
          />
        </div>
        <button onClick={addTableHandler}>Add</button>
      </section>

      <div className={s.text}>Boards:</div>

      <section className={s.cards}>
        {boards.map(({ id, name }) => (
          <div key={id} className={s.card} onClick={() => setActiveBoard(id)}>
            <div className={s.cardName}>{name}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
