import { Header } from 'features/Header/Header';
import { useStore } from 'app/App';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const HeaderAdapter = () => {
  const [store, setStore] = useStore(store => store);
  const navigate = useNavigate();

  const goHome = useCallback(() => navigate('/'), [navigate]);
  const logout = useCallback(() => {
    setStore({ ...store, user: null });
    goHome();
  }, [goHome, setStore, store]);

  return <Header goHome={goHome} logout={logout} />;
};
