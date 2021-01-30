import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { createStore, applyMiddleware, compose } from 'redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>,
    document.getElementById('app')
  )
})
