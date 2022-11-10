import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import React from 'react';
import { useStore } from 'app/App';
import { WorkspacesPage } from 'pages/WorkspacesPage';
import { BoardsPage } from 'pages/BoardsPage';
import { BoardPage } from 'pages/BoardPage';

const ROUTES = [
  { path: '/', Element: () => <Navigate to="/workspaces" /> },
  { path: '/workspaces', Element: WorkspacesPage },
  { path: '/boards/:workspaceId', Element: BoardsPage },
  { path: '/board/:boardId', Element: BoardPage },
];

export const AppRoutes = () => {
  const [user] = useStore(store => store.user);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {ROUTES.map(({ path, Element }) => (
        <Route
          key={path}
          path={path}
          element={user ? <Element /> : <Navigate to="/login" />}
        />
      ))}
    </Routes>
  );
};
