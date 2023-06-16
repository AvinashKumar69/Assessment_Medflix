import React, {createContext, useEffect, useState} from 'react';
import {useOrientation} from '../customHooks/useOrientation';

export const ReplayContext = createContext();

export const ReplayContextProvider = ({children}) => {
  const orientation = useOrientation();

  const [hideBottomBar, setHideBottomBar] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (orientation === 'LANDSCAPE') {
      setHideHeader(true);
    } else setHideHeader(false);
  }, [orientation]);

  return (
    <ReplayContext.Provider
      value={{
        orientation,
        hideBottomBar,
        setHideBottomBar,
        hideHeader,
        setHideHeader,
      }}>
      {children}
    </ReplayContext.Provider>
  );
};
