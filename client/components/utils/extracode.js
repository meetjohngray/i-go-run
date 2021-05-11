/*
<form onSubmit={handleSubmit(onSubmit)}>
  <Flex justifyContent="center" alignContent="center">
    <FormControl id='distance' >
      <FormLabel htmlFor="distance">Distance</FormLabel>
       register your input into the hook by invoking the "register" function
      <NumberInput min={0} name='distance' defaultValue="test" ref={register}>
        <NumberInputField name='distance'/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>Enter the distance in miles.</FormHelperText>
    </FormControl>
    <FormControl id='time' >
      <FormLabel htmlFor='time'>Time</FormLabel>
       include validation with required or other standard HTML validation rules
      <NumberInput min={0} name="time" ref={register({ required: true })}>
        <NumberInputField name='time'/>
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>Enter the time in minutes.</FormHelperText>
      {errors.exampleRequired && <span>This field is required</span>}
    </FormControl>
    <FormControl id='pace' >
      <FormLabel htmlFor='pace'>Pace</FormLabel>
      <NumberInput min={0} name="pace" ref={register({ required: true })}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>Enter the pace in minutes per mile.</FormHelperText>
      {errors.exampleRequired && <span>This field is required</span>}
    </FormControl>
    <FormControl id='elevation' >
      <FormLabel htmlFor='elevation'>Elevation</FormLabel>
      <NumberInput min={0} name="elevation" ref={register({ required: true })}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>Enter the elevation gain in feet.</FormHelperText>
      {errors.exampleRequired && <span>This field is required</span>}
    </FormControl>
    <FormControl >
      <Button color="primary" textAlign="center" type="submit">Submit</Button>
    </FormControl>
  </Flex>
</form>
*/

// const fetchRuns = async () => {
//   const response = await fetch('https://api.sheety.co/95b80a7b10ebccf74864840085f03df1/iGoRun/sheet1')
//   const data = await response.json()
//   return data
