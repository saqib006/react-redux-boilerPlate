import {combineReducers, createStore, applyMiddleware} from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import authReducer from './reducer/authReducer';
import {authEpic} from './epic/authEpic';
import { loadState, saveState } from "../PersistState";

const persistedState = loadState();




let rootReducer = combineReducers({
    authReducer,
    
});

export const rootEpic = combineEpics(

  authEpic.createUserOnFirebase,
  authEpic.updateUserProfile,
  authEpic.authStateChanged,
  authEpic.signInFromFirebase,
  authEpic.signOutFromFirebase,
  
  
)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);



export let store = createStore(
    rootReducer,
    persistedState,
    createStoreWithMiddleware
    );

  store.subscribe(()=>{
    saveState(store.getState());
})