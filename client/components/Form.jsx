import React, { useState } from 'react'
import { Container, Flex, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage,FormHelperText, } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

function Form () {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(watch('example')) // watch input value by passing the name of it

  const [myRun, setMyRun] = useState({})

  return (
    <>
      <Container maxW='xl' mt='5' centerContent>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex justifyContent="center" alignContent="center">
            <FormControl id='distance' padding='4' maxW='3xl'>
              <FormLabel htmlFor="distance">Distance</FormLabel>
              {/* register your input into the hook by invoking the "register" function */}
              <Input type='number' name='distance' defaultValue="test" ref={register} />
              <FormHelperText>Enter the distance in miles.</FormHelperText>
            </FormControl>
            <FormControl id='time' padding='4' maxW='3xl'>
              <FormLabel htmlFor='time'>Time</FormLabel>
              {/* include validation with required or other standard HTML validation rules */}
              <Input type='number' name="time" ref={register({ required: true })} />
              <FormHelperText>Enter the time in minutes.</FormHelperText>
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>
            <FormControl id='pace' padding='4' maxW='3xl'>
              <FormLabel htmlFor='pace'>Pace</FormLabel>
              <Input type='number' name="pace" ref={register({ required: true })} />
              <FormHelperText>Enter the pace in minutes per mile.</FormHelperText>
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>
            <FormControl id='elevation' padding='4' maxW='3xl'>
              <FormLabel htmlFor='elevation'>Elevation</FormLabel>
              <Input type='number' name="elevation" ref={register({ required: true })} />
              <FormHelperText>Enter the elevation gain in feet.</FormHelperText>
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>
            <FormControl padding='4' maxW='3xl'>
              <Button color="primary" textAlign="center" type="submit">Submit</Button>
            </FormControl>
          </Flex>
        </form>
      </Container>
    </>
  )
}

export default Form
