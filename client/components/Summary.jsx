import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, Link, Text } from '@chakra-ui/react'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'
import data from '../data/runData.json'

dayjs.extend(customParseFormat)

// const fetchRuns = async () => {
//   const response = await fetch('https://api.sheety.co/95b80a7b10ebccf74864840085f03df1/iGoRun/sheet1')
//   const data = await response.json()
//   return data
// }

function Summary () {
  function getMiles (distance) {
    return (distance * 0.0006213712).toFixed(2)
  }
  console.log(data)

  function parseTotalTime (timeStr) {
    return dayjs(timeStr, ['MMMM-DD-YYYY', 'MMMM-D-YYYY']).format('YYYY-MM-DD [at] H:mm:ss')
  }
  function parseElapsedTime (timeStr) {
    const regex = /hour/
    if ((timeStr.search(regex) > -1) && Number(timeStr.substring(0, 2)) > 24) {
      let parsedTimeStr = `${Number(timeStr.substring(0, 2)) - 24} ${timeStr.substring(3)}`
      parsedTimeStr = `1:${dayjs(parsedTimeStr, ['HH:mm:ss', 'mm:ss']).format('H:mm:ss')}`
      return parsedTimeStr
    } else {
      return dayjs(timeStr, ['HH:mm:ss', 'mm:ss']).format('H:mm:ss')
    }
  }

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
              <Th>Strava</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.sheet1.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{parseTotalTime(item.dateTime)}</Td>
                  <Td>{getMiles(item.distance)} Miles</Td>
                  <Td>{parseElapsedTime(item.elapsedTime)}</Td>
                  <Td><Link href={item.stravaLink}>Strava</Link></Td>
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
