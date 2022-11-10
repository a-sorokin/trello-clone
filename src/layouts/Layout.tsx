import React, { useEffect, useState } from 'react';
import { MobileView } from 'layouts/mobile/MobileView';
import { DesktopView } from 'layouts/desktop/DesktopView';

const getWindowSize = () => window.innerWidth;

export const Layout: React.FC<{
  elements: { [key: string]: any };
}> = ({ elements }) => {
  const [windowWidth, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(getWindowSize());
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {windowWidth < 500 ? (
        <MobileView elements={elements} />
      ) : (
        <DesktopView elements={elements} />
      )}
    </>
  );
};
