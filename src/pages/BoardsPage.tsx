import React, { useEffect } from 'react';
import { Layout } from 'layouts/Layout';
import { HeaderAdapter } from 'features/Header/HeaderAdapter';
import { WorkspacesSidebarAdapter } from 'features/Workspaces/Sidebar/WorkspacesSidebarAdapter';
import { BoardsTableAdapter } from 'features/Boards/BoardsTableAdapter';
import { useStore } from 'app/App';
import { useParams } from 'react-router-dom';

export const BoardsPage = () => {
  const [, setStore] = useStore(store => store);
  const params = useParams();

  useEffect(() => {
    setStore({ activeWorkspace: params.workspaceId });
  }, [params.workspaceId, setStore]);

  return (
    <Layout
      elements={{
        header: HeaderAdapter,
        sidebar: WorkspacesSidebarAdapter,
        main: BoardsTableAdapter,
      }}
    />
  );
};
