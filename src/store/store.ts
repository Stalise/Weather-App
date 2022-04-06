import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { coordinatesReducer } from './reducers/coordinatesReducer/coordinatesReducer';
import { weatherReducer } from './reducers/weatherReducer/weatherReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
   coordinates: coordinatesReducer,
   weather: weatherReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type RooState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga)
