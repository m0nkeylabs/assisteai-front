import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import apiInjectorMiddleware from './middleware/api-injector.middleware';

export default function configureStore() {
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, composeEnhancers(applyMiddleware(apiInjectorMiddleware, sagaMiddleware)));

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
}
