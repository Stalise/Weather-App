import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { coordinatesReducer } from './reducers/coordinatesReducer/coordinatesReducer';
import { weatherReducer } from './reducers/weatherReducer/weatherReducer';
import { themeReducer } from './reducers/themeReducer/themeReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
   key: 'root',
   storage,
}

export const rootReducer = combineReducers({
   coordinates: coordinatesReducer,
   weather: weatherReducer,
   theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
   persistedReducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store)

export type RooState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga)
