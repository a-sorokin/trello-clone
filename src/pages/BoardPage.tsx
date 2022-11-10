import React, { useEffect } from 'react';
import { Layout } from 'layouts/Layout';
import { HeaderAdapter } from 'features/Header/HeaderAdapter';
import { WorkspacesSidebarAdapter } from 'features/Workspaces/Sidebar/WorkspacesSidebarAdapter';
import { useParams } from 'react-router-dom';
import { useStore } from 'app/App';
import { BoardAdapter } from 'features/Board/BoardAdapter';

export const BoardPage = () => {
  const [, setStore] = useStore(store => store.activeBoard);
  const params = useParams();

  useEffect(() => {
    setStore({ activeBoard: params.id });
  }, [params.id, setStore]);

  return (
    <Layout
      elements={{
        header: HeaderAdapter,
        sidebar: WorkspacesSidebarAdapter,
        main: BoardAdapter,
      }}
    />
  );
};
