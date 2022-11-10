import { useCallback, useRef } from 'react';
import { useStore } from 'app/App';
import { Navigate } from 'react-router-dom';
import style from './LoginPage.module.scss';

export const LoginPage = () => {
  const nameRef = useRef<any>(null);
  const orgRef = useRef<any>(null);
  const [user, setStore] = useStore(store => store.user);
  const addUser = useCallback(() => {
    setStore({
      user: {
        name: nameRef.current.value,
        organization: orgRef.current.value,
      },
    });
  }, [setStore]);

  return (
    <main className={style.login}>
      <div>
        <div>Welcome to trello</div>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={nameRef} autoFocus />
        </div>

        <div>
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            name="organization"
            id="organization"
            ref={orgRef}
          />
        </div>

        <button onClick={addUser}>Submit</button>
        {user && <Navigate to="/" replace={true} />}
      </div>
    </main>
  );
};
