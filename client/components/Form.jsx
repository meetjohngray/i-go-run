import React from 'react'
import { Container, Box, Heading, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

function Form () {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <>
      <Container maxW='xl' centerContent>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Input name="example" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <Input name="exampleRequired" ref={register({ required: true })} />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Container> 
    </>
  )
}

export default Form
