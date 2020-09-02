import React, { useReducer } from 'react';

export interface IAction {
  type: any;
  payload?: any;
}

type TReducer<T> = (state: T, action: IAction) => T;

interface ICallback {
  [key: string]: Function;
}

interface ContextData {
  [key: string]: any;
}

/**
 * @param T type of data the context is going to make available
 */

export default <T extends {}>(
  reducer: TReducer<T>,
  callbacks: ICallback,
  initialState: T
) => {
  const Context = React.createContext<ContextData>({
    state: initialState,
  });

  const Provider = ({ children }: any): JSX.Element => {
    const [state, dispatch] = useReducer<TReducer<T>>(reducer, initialState);

    let actionCreators: { [key: string]: Function } = {};

    for (let key in callbacks) {
      actionCreators[key] = callbacks[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...actionCreators }}>
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
  };
};
