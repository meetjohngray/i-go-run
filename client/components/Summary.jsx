import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react'
// import runData from '../data/runData.json'

const fetchRuns = async () => {
  const response = await fetch('https://api.sheety.co/95b80a7b10ebccf74864840085f03df1/iGoRun/sheet1')
  const data = await response.json()
  return data
}

function Summary () {
  function getMiles (distance) {
    return (distance * 0.0006213712).toFixed(2)
  }
  const [runs, setRuns] = useState({})

  const { isLoading, error, data } = useQuery('runData', fetchRuns, { refetchOnWindowFocus: false })

  if (isLoading) return <span>Loading...</span>
  if (error) return <span>Ooops! Something went wrong.</span>
  return (
    <>
      <Heading as='h2'>Your Runs</Heading>
      <Flex justifyContent="center" alignContent="center">
        <Table>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Distance</Th>
              <Th>Time</Th>
              <Th>Strava</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.sheet1.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.dateTime}</Td>
                  <Td>{getMiles(item.distance)} Miles</Td>
                  <Td>{item.elapsedTime}</Td>
                  <Td><a href={item.stravaLink}>Strava</a></Td>
                </Tr>)
            })
            }
          </Tbody>
        </Table>
      </Flex>
    </>
  )
}

export default Summary
