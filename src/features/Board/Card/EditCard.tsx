import { FC } from 'react';
import s from 'features/Board/Card/Card.module.scss';

export const EditCard: FC<{
  refVal: any;
  name: string;
  handler: () => void;
}> = ({ refVal, name, handler }) => (
  <div>
    <input
      className={s.input}
      type="text"
      ref={refVal}
      placeholder={name}
      autoFocus
    />
    <button onClick={() => handler()}>Ok</button>
  </div>
);
