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
      const boardIndex = boards.findIndex(b => b.id === boardId);
      boards[boardIndex].columns.push(list);
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  const changeListName = useCallback(
    (newName: string, position: number) => {
      const boardIndex = boards.findIndex(b => b.id === boardId);
      boards[boardIndex].columns[position].name = newName;
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  const addCard = useCallback(
    (name: string, columnId: string) => {
      const card = { id: uuidv4(), name, columnId, description: '' };
      const boardIndex = boards.findIndex(b => b.id === boardId);
      boards[boardIndex].cards.push(card);
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  const changeCardName = useCallback(
    (newName: string, cardId: string) => {
      const boardIndex = boards.findIndex(b => b.id === boardId);
      const cardIndex = boards[boardIndex].cards.findIndex(
        c => c.id === cardId
      );
      boards[boardIndex].cards[cardIndex].name = newName;
      setStore({ boards });
    },
    [boardId, boards, setStore]
  );

  const moveCard = useCallback(
    (dir: 'right' | 'left', cardId: string) => {
      if (!currentBoard) return;
      const { cards, columns } = currentBoard;
      const boardIndex = boards.findIndex(b => b.id === boardId);
      const cardIndex = cards.findIndex(c => c.id === cardId);
      const columnIndex = columns.findIndex(
        c => c.id === cards[cardIndex].columnId
      );
      const newColumnIndex = columns.findIndex(
        c =>
          c.position ===
          columns[columnIndex].position + (dir === 'right' ? +1 : -1)
      );
      boards[boardIndex].cards[cardIndex].columnId = columns[newColumnIndex].id;
      setStore({ boards });
    },
    [boardId, boards, currentBoard, setStore]
  );

  return (
    <Board
      columns={currentBoard?.columns || []}
      addList={addList}
      boardName={currentBoard?.name || ''}
      changeListName={changeListName}
      cards={currentBoard?.cards || []}
      addCard={addCard}
      changeCardName={changeCardName}
      moveCard={moveCard}
    />
  );
};
