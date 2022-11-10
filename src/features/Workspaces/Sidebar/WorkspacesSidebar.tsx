import { FC } from 'react';
import { TBoards, TWorkspaces } from 'types/types';
import s from './WorkspacesSidebar.module.scss';

export const WorkspacesSidebar: FC<{
  workspaces: TWorkspaces;
  boards: TBoards;
  setActiveWorkspace: (id: string) => void;
  setActiveBoard: (id: string) => void;
}> = ({ workspaces, setActiveWorkspace, boards, setActiveBoard }) => {
  return (
    <div className={s.sidebar}>
      <div className={s.back} onClick={() => setActiveWorkspace('')}>
        Workspaces
      </div>
      {workspaces?.map(({ id, name }) => (
        <div
          key={id}
          className={s.workspace}
          onClick={() => setActiveWorkspace(id)}
        >
          {name}
          {boards
            .filter(b => b.workspaceId === id)
            .map(({ id: boardId, name: bName }) => (
              <div
                key={boardId}
                className={s.boardName}
                onClick={e => {
                  e.stopPropagation();
                  setActiveBoard(boardId);
                }}
              >
                {bName}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
