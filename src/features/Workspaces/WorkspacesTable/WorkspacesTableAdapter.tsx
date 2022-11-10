import { useStore } from 'app/App';
import { WorkspacesTable } from 'features/Workspaces/WorkspacesTable/WorkspacesTable';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export const WorkspacesTableAdapter = () => {
  const [store, setStore] = useStore(store => store);
  const { workspaces } = store;
  const navigate = useNavigate();

  const addWorkspace = useCallback(
    (name: string, description: string) => {
      const newWorkspace = { id: uuidv4(), name, description };

      setStore({
        ...store,
        workspaces: [...workspaces, newWorkspace],
      });
    },
    [setStore, store, workspaces]
  );

  const setActiveWorkspace = useCallback(
    (id: string) => {
      navigate(`/boards/${id}`);
    },
    [navigate]
  );

  return (
    <WorkspacesTable
      workspaces={workspaces}
      addWorkspace={addWorkspace}
      setActiveWorkspace={setActiveWorkspace}
    />
  );
};
