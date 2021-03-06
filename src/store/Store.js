// store.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  user: [],
  projects: []
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log(action);
    switch (action.type) {
      case 'action description':
        const newState = "dd";
        return newState;
      case 'login':
        return {
          ...state,
          user: {token: action.data},
        }
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }