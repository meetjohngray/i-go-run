// https://www.akashmittal.com/react-native-forms-using-react-hook-form/

import React, { useState } from 'react'
import { Container, Flex, Input, RadioGroup, Stack, Radio, NumberIncrementStepper, NumberDecrementStepper, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'

function Form () {
  const [unitsOfMeasure, setUnitsOfMeasure] = useState('imperial')
  const { register, handleSubmit, watch, control, errors } = useForm()
  const onSubmit = data => { console.log('Clicked', data) }
  console.log(watch('distance')) // watch input value by passing the name of it
  // const [radioValue, setRadioValue] = useState('')
  // const [myRun, setMyRun] = useState({})

  return (
    <>
      <Container maxW='xl' mt='5' centerContent>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <Flex justifyContent="center" alignContent="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <FormControl>
              <FormLabel htmlFor='date'>Date</FormLabel>
              <Input type="datetime-local" placeholder="date" name="date" ref={register({ required: true })} />
            </FormControl> */}
            <Controller
              name='units'
              control={control}
              defaultValue=''
              render={({ onChange, value }) => (
                <FormControl as="fieldset">
                  <FormLabel as='legend' htmlFor='units'>Unit of Measure</FormLabel>
                  <RadioGroup value={unitsOfMeasure} onChange={setUnitsOfMeasure}>
                    <Stack direction="row">
                      <Radio value="imperial">Imperial</Radio>
                      <Radio value="metric">Metric</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              )}
            />

            {/* <input name="units" type="radio" value="metric" ref={register({ required: true })}/>
            <input name="units" type="radio" value="imperial" ref={register({ required: true })}/> */}
            <FormControl>
              <FormLabel htmlFor='distance'>Distance</FormLabel>
              <Input type="number" placeholder="distance" name="distance" ref={register({ required: true, max: 300, min: 0, maxLength: 100 })} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='totalTime'>Total Time</FormLabel>
              <Input type="time" placeholder="Total Time" name="totalTime" ref={register({ required: true, maxLength: 12 })} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='pace'>Pace</FormLabel>
              <Input type="time" placeholder="Pace" name="pace" ref={register({ required: true })} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='elevation'>Elevation Gain</FormLabel>
              <Input type="number" placeholder="Elevation Gain" name="elevation" ref={register({ required: true, max: 40000, min: 0 })} />
            </FormControl>

            <Button color="primary" textAlign="center" type="submit">Submit</Button>

          </form>
        </Flex>
        <p>You ran {watch('distance')} {unitsOfMeasure === 'imperial' ? 'miles' : 'kilometers'}!</p>
      </Container>
    </>
  )
}

export default Form
