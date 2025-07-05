'use client';

import { ReactNode, useState } from 'react';
import { RootStore, StoreContext } from './RootStore';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [rootStore] = useState(() => new RootStore());

  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

 