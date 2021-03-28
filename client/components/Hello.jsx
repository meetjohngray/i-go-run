import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'
import Summary from './Summary'
import Form from './Form'

function Hello () {
  return (
    <Container maxW='xl' centerContent>
      <Container padding='4' mt='4' bg='gray.100' w='100%' centerContent>
        <Heading as='h1'>I Go Run</Heading>
      </Container>
      <Box>
        <Summary />
      </Box>
      <Box>
        <Form />
      </Box>
    </Container>
  )
}

export default Hello
