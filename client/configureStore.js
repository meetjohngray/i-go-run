import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from './redux/reducers'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()

const configureStore = (initialState = {}) => {
  const enhancers = []
  const __DEV__ = process.env.NODE_ENV !== 'production'
  if (__DEV__) {
    const { __REDUX_DEVTOOLS_EXTENSION__ } = window
    if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
      enhancers.push(__REDUX_DEVTOOLS_EXTENSION__())
    }
  }

  const middleware = [routerMiddleware(history), sagaMiddleware]
  const rootReducer = createRootReducer(history)

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), ...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore()
