import React from 'react';
import createContextStore from 'store/contextStore';
import { getDataFromLocalstorage } from 'app/getDataFromLocalstorage';
import { AppRoutes } from 'routes/Routes';
import './App.module.scss';
import { TStore } from 'types/types';

// @ts-ignore
const initialState: TStore = getDataFromLocalstorage();
const Context = createContextStore(initialState);
export const { useStore } = Context;

const App = () => (
  <Context.Provider>
    <AppRoutes />
  </Context.Provider>
);

export default App;
