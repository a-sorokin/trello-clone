import React from 'react';
import { Sidebar } from 'layouts/desktop/components/Sidebar/Sidebar';
import { Header } from 'layouts/desktop/components/Header/Header';
import { Main } from 'layouts/desktop/components/Main/Main';
import style from './DesktopView.module.scss';

export const DesktopView: React.FC<{
  elements: { [key: string]: any };
}> = ({ elements }) => (
  <div className={style.desktopView}>
    <Header Element={elements.header} />
    <div className={style.container}>
      <Sidebar Element={elements.sidebar} />
      <Main Element={elements.main} />
    </div>
  </div>
);
