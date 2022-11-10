import s from './Board.module.scss';
import { TBoardColumn, TCard } from 'types/types';
import { FC, useCallback } from 'react';
import { NewList } from 'features/Board/NewList/NewList';
import { List } from 'features/Board/List/List';
import { ListName } from 'features/Board/ListName/ListName';
import { Card } from 'features/Board/Card/Card';
import { AddCard } from 'features/Board/AddCard/AddCard';

type TBoardProps = {
  columns: TBoardColumn[];
  addList: (list: TBoardColumn) => void;
  boardName: string;
  changeListName: (newName: string, position: number) => void;
  cards: TCard[];
  addCard: (name: string, columnId: string) => void;
};

export const Board: FC<TBoardProps> = ({
  columns,
  addList,
  boardName,
  changeListName,
  cards,
  addCard,
}) => {
  const changeNameHandler = useCallback(
    (name: string, position: number) => changeListName(name, position),
    [changeListName]
  );

  // const getCards = useCallback(() => {}, []);

  return (
    <div className={s.board}>
      <div className={s.name}>{boardName}</div>
      <div className={s.lists}>
        {columns
          .sort((c, cc) => c.position - cc.position)
          .map(c => (
            <List key={c.id}>
              <>
                <ListName
                  name={c.name}
                  changeNameHandler={(name: string) => {
                    changeNameHandler(name, c.position);
                  }}
                />
                {cards
                  .filter(card => card.columnId === c.id)
                  .map(card => (
                    <Card key={card.id} name={card.name} />
                  ))}
                <AddCard addCard={name => addCard(name, c.id)} />
              </>
            </List>
          ))}
        <NewList addList={addList} position={columns.length} />
      </div>
    </div>
  );
};
