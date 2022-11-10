import { useStore } from 'app/App';
import React, { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BoardsTable } from 'features/Boards/BoardsTable';
import { useNavigate } from 'react-router-dom';

export const BoardsTableAdapter = () => {
  const [store, setStore] = useStore(store => store);
  const { boards, activeWorkspace, workspaces } = store;
  const navigate = useNavigate();

  const workspaceName = useMemo(() => {
    const ws = workspaces.find(ws => ws.id === activeWorkspace);
    return ws?.name;
  }, [activeWorkspace, workspaces]);

  const addBoard = useCallback(
    (name: string) => {
      if (!activeWorkspace) {
        return;
      }

      const newBoard = {
        id: uuidv4(),
        workspaceId: activeWorkspace,
        name,
        columns: [],
        cards: [],
      };

      setStore({ ...store, boards: [...boards, newBoard] });
    },
    [activeWorkspace, boards, setStore, store]
  );

  const setActiveBoard = useCallback(
    (id: string) => {
      navigate(`/board/${id}`);
    },
    [navigate]
  );

  const boardsForSpace = useMemo(
    () => boards.filter(b => b.workspaceId === activeWorkspace),
    [activeWorkspace, boards]
  );

  return (
    <>
      {activeWorkspace ? (
        <BoardsTable
          workspaceName={workspaceName || ''}
          boards={boardsForSpace}
          addBoard={addBoard}
          setActiveBoard={setActiveBoard}
        />
      ) : null}
    </>
  );
};
