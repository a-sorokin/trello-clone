import { TUser } from 'types/types';

export const getDataFromLocalstorage = (): TUser | null => {
  const store = localStorage.getItem('store');
  if (!store) {
    // @ts-ignore
    return { user: null, workspaces: [], activeWorkspace: null, boards: [] };
  }
  return JSON.parse(store).current;
};
