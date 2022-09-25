import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Run saga
sagaMiddleware.run(rootSaga);

export default store;
