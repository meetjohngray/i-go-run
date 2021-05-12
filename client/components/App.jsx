import React from 'react'
import { Switch, Route } from 'react-router'
import { Container, Box, Heading, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import HomePage from './HomePage'
import Token from './Token'

function App () {
  const { toggleColorMode } = useColorMode()
  const headingBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <>
      <Container maxW='container.xl'>
        <Box padding='4' mt='4' bg={headingBackground}>
          <Heading as='h1' textAlign='center'>I Go Run</Heading>
          <Button onClick={toggleColorMode}>Color Mode</Button>
        </Box>
        <Box>
          <Switch>
            <Route path='/token' exact component={Token} />
            <Route path='/' exact component={HomePage} />
          </Switch>
        </Box>
      </Container>
    </>
  )
}

export default App
