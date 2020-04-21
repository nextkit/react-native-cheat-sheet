import React, { createContext } from 'react';

import {CounterStore, ThemeStore} from '../stores';

const counterStore = new CounterStore();
const themeStore = new ThemeStore();

export const StoreContext = createContext({
  counterStore,
  themeStore,
});

const StoreContextProvider: React.FC = ({ children }) => (
  <StoreContext.Provider value={{ counterStore, themeStore }}>
    {children}
  </StoreContext.Provider>
);

export default StoreContextProvider;
