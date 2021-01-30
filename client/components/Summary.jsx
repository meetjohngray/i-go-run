import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Flex, Heading, Text } from '@chakra-ui/react'

const fetchRuns = async () => {
  const response = await fetch('https://api.sheety.co/95b80a7b10ebccf74864840085f03df1/iGoRun/sheet1')
  const data = await response.json()
  console.log(data)
  return data
}

const getMiles = (distance) => (distance * 0.0006213712).toFixed(2)

function Summary () {
  // const [runs, setRuns] = useState({})
  const { isLoading, error, data } = useQuery('runData', fetchRuns, { refetchOnWindowFocus: false })

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Ooops! Something went wrong.</span>
  return (
    <Flex justifyContent="center" alignContent="center" flexDirection='column'>
      <Heading as='h2'>Your Runs</Heading>
      <Text>Time: {data.sheet1[0].dateTime}</Text>
      <Text>Distance: {getMiles(data.sheet1[0].distance)} miles</Text>
      <Text>Time: {data.sheet1[0].elapsedTime}</Text>
    </Flex>
  )
}

export default Summary
