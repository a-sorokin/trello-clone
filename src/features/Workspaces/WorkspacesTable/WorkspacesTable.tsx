import { FC, useCallback, useRef } from 'react';
import { TWorkspaces } from 'types/types';
import s from './WorkspacesTable.module.scss';

export const WorkspacesTable: FC<{
  workspaces: TWorkspaces;
  addWorkspace: (name: string, description: string) => void;
  setActiveWorkspace: (id: string) => void;
}> = ({ workspaces, addWorkspace, setActiveWorkspace }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const addWorkspaceHandler = useCallback(() => {
    const name = nameRef?.current?.value;
    const desc = descRef?.current?.value;
    if (name && desc) {
      addWorkspace(name, desc);
    }
  }, [addWorkspace]);

  return (
    <div className={s.workspaces}>
      <section className={s.addNew}>
        <div>Add workspace</div>
        <div>
          <label htmlFor="workspace-name">Name</label>
          <input
            type="text"
            name="name"
            id="workspace-name"
            ref={nameRef}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input type="text" name="description" id="desc" ref={descRef} />
        </div>
        <button onClick={addWorkspaceHandler}>Add</button>
      </section>

      <div className={s.text}>Workspaces:</div>

      <section className={s.cards}>
        {workspaces.map(({ id, name, description }) => (
          <div
            key={id}
            className={s.card}
            onClick={() => setActiveWorkspace(id)}
          >
            <div className={s.cardName}>{name}</div>
            <div>{description}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
