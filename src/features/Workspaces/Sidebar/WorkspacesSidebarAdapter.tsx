import { WorkspacesSidebar } from 'features/Workspaces/Sidebar/WorkspacesSidebar';
import { useStore } from 'app/App';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const WorkspacesSidebarAdapter = () => {
  const [{ workspaces, boards }] = useStore(store => store);
  const navigate = useNavigate();

  const setActiveWorkspace = useCallback(
    (id: string) => {
      id ? navigate(`/boards/${id}`) : navigate(`/workspaces`);
    },
    [navigate]
  );

  const setActiveBoard = useCallback(
    (boardId: string) => {
      navigate(`/board/${boardId}`);
    },
    [navigate]
  );

  return (
    <WorkspacesSidebar
      workspaces={workspaces}
      boards={boards}
      setActiveWorkspace={setActiveWorkspace}
      setActiveBoard={setActiveBoard}
    />
  );
};
