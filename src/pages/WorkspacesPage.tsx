import React from 'react';
import { Layout } from 'layouts/Layout';
import { HeaderAdapter } from 'features/Header/HeaderAdapter';
import { WorkspacesTableAdapter } from 'features/Workspaces/WorkspacesTable/WorkspacesTableAdapter';
import { WorkspacesSidebarAdapter } from 'features/Workspaces/Sidebar/WorkspacesSidebarAdapter';

export const WorkspacesPage = () => {
  return (
    <Layout
      elements={{
        header: HeaderAdapter,
        sidebar: WorkspacesSidebarAdapter,
        main: WorkspacesTableAdapter,
      }}
    />
  );
};
