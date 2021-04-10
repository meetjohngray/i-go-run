import React from 'react'
import { Switch, Route } from 'react-router'
import { Container, Box, Heading } from '@chakra-ui/react'
import HomePage from './HomePage'
import Token from './Token'

// import Summary from './Summary'

function App () {
  return (
    <div>
      <Switch>
        <Container maxW='xl' centerContent>
          <Container padding='4' mt='4' bg='gray.100' w='100%' centerContent>
            <Heading as='h1'>I Go Run</Heading>
          </Container>
          <Box>
            <Route path='/token' exact component={Token} />
            <Route path='/' exact component={HomePage} />
            {/* <Summary /> */}
          </Box>
        </Container>
      </Switch>
    </div>
  )
}

export default App
