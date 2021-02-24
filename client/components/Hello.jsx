import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'
import Summary from './Summary'
import Form from './Form'

function Hello () {
  return (
    <Container maxW='xl' centerContent>
      <Box padding='4' mt='4' bg='gray.100' maxW='3xl'>
        <Heading as='h1'>I Go Run</Heading>
      </Box>
      <Box>
        <Summary />
      </Box>
      {/* <Box>
        <Form />
      </Box> */}
    </Container>
  )
}

export default Hello
