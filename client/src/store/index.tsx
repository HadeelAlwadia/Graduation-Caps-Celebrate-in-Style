import  { createContext, useReducer } from 'react';
import reducer from './reducer';
import { getFromLocalStorage } from '../storage';
import { Iaction, IappState } from '../@types';


export const initialState:IappState = {
   theme: getFromLocalStorage('theme') || 'dark',
  userInfo: { data: null, loading: true, error: '' },
  requestsUser: { data: null, loading: true, error: '' },
  usersAdmin: { data: null, loading: true, error: '' },
  productsAdmin: { data: null, loading: true, error: '' },
    dispatch:(action:Iaction)=>{console.log(action)}
};



export const AppContext = createContext(initialState);


  const AppProvider = ({children}:{children:any}) => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
     <AppContext.Provider value={{...appState,dispatch}}>
       {children}
     </AppContext.Provider>
  );
};



export default AppProvider;


