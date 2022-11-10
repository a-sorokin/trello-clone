import React from 'react';
import { DesktopView } from 'layouts/desktop/DesktopView';

export const MobileView: React.FC<{
  elements: { [key: string]: () => JSX.Element };
}> = ({ elements }) => (
  <div>
    Mobile layout work in progress
    <DesktopView elements={elements} />
  </div>
);
