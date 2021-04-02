import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Flex, Heading, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react'
import TableRow from './TableRow'
import data from '../data/stravaData.json'

// const fetchRuns = async () => {
//   const response = await fetch('https://api.sheety.co/95b80a7b10ebccf74864840085f03df1/iGoRun/sheet1')
//   const data = await response.json()
//   return data
// }

function Summary () {
  console.log(data)

  // const [runs, setRuns] = useState({})

  // const { isLoading, error, data } = useQuery('runData', fetchRuns, { refetchOnWindowFocus: false })

  // if (isLoading) return <span>Loading...</span>
  // if (error) return <span>Ooops! Something went wrong.</span>
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
              <Th>Pace</Th>
              <Th>Elevation Gain</Th>
              {/* <Th>Strava</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <TableRow key={item.id} item= {item} />
              )
            })
            }
          </Tbody>
        </Table>
      </Flex>
    </>
  )
}

export default Summary
