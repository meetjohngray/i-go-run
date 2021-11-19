import React, { useState, useRef, useEffect } from 'react'
import { Box, Center, Heading, Table, Thead, Tbody, Tr, Th, Spinner, Button } from '@chakra-ui/react'
import TableRow from './TableRow'

function RunTable ({ data }) {
  const { loading, activities } = data
  const [items, setItems] = useState(0)
  const prevItemsRef = useRef()
  const activitiesReverse = activities.slice(0).reverse()

  useEffect(() => {
    prevItemsRef.current = items
  })
  const prevItems = prevItemsRef.current

  const handleClick = () => {
    setItems(
      items >= activities.length
        ? items
        : items + 5
    )
    console.log(items)
  }

  return (
    <>
      {loading ? (
        <Center flexDirection='column'>
          <Heading as='h3' textAlign='center'>Loading...</Heading>
          <Spinner />
        </Center>
      ) : (
        <Box>
          <Heading as='h2'>Your Activities</Heading>
          <Center>
            <Table>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Type</Th>
                  <Th>Distance</Th>
                  <Th>Time</Th>
                  <Th>Pace</Th>
                  <Th>Elevation Gain</Th>
                  <Th>Strava</Th>
                </Tr>
              </Thead>
              <Tbody>
                {activitiesReverse.slice(prevItems, items).map((activity) => {
                  if (activity.type !== 'Workout') {
                    return (
                      <TableRow key={activity.id} item= {activity} />
                    )
                  }
                })
                }
              </Tbody>
            </Table>
          </Center>
          <Center>
            <Button onClick={() => handleClick()}>Show More!</Button>
          </Center>
        </Box>
      )}
    </>
  )
}

export default RunTable
