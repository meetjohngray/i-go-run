import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'

import createRootReducer from './redux/reducers'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()

const persistedState = loadState() // Get the state from local storage

const configureStore = () => {
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

  // Use persisted state so on boot the app will use the data that exists in the state
  const store = createStore(rootReducer, persistedState, compose(applyMiddleware(...middleware), ...enhancers))

  sagaMiddleware.run(rootSaga)

  // Subscribe to store updates so we can action saves on change to state
  store.subscribe(
    // Throttle the save
    throttle(() => {
      saveState({
        auth: store.getState().auth // Only save these sections of the auth
        // if we want to save other state we can add it in here
        // activities: store.getState().activities, etc!
      })
    }, 1000) // 1 per second max!
  )

  return store
}

export default configureStore()
