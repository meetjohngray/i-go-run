import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { ConnectedRouter } from 'connected-react-router'
import storeConfig, { history } from './configureStore'
// import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools''

import App from './components/App'

ReactDom.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <ConnectedRouter history={history}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)
