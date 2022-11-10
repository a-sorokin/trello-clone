import { Board } from 'features/Board/Board';
import { useParams } from 'react-router-dom';
import { useStore } from 'app/App';
import { useCallback, useMemo } from 'react';
import { TBoardColumn } from 'types/types';
import { v4 as uuidv4 } from 'uuid';

export const BoardAdapter = () => {
  const { boardId } = useParams();
  const [{ boards }, setStore] = useStore(store => store);

  const currentBoard = useMemo(
    () => boards.find(b => b.id === boardId),
    [boardId, boards]
  );

  const addList = useCallback(
    (list: TBoardColumn) => {
      const bIndex = boards.findIndex(b => b.id === boardId);
      boards[bIndex].columns.push(list);
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  const changeListName = useCallback(
    (newName: string, position: number) => {
      const bIndex = boards.findIndex(b => b.id === boardId);
      boards[bIndex].columns[position].name = newName;
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  const addCard = useCallback(
    (name: string, columnId: string) => {
      const card = { id: uuidv4(), name, columnId, description: '' };
      const bIndex = boards.findIndex(b => b.id === boardId);
      boards[bIndex].cards.push(card);
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  return (
    <Board
      columns={currentBoard?.columns || []}
      addList={addList}
      boardName={currentBoard?.name || ''}
      changeListName={changeListName}
      cards={currentBoard?.cards || []}
      addCard={addCard}
    />
  );
};
