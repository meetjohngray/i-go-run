import React from 'react'
import { Flex, Heading, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react'
import TableRow from './TableRow'

function RunTable ({ data }) {
  const { loading, activities } = data

  // const [runs, setRuns] = useState({})

  // const { isLoading, error, data } = useQuery('runData', fetchRuns, { refetchOnWindowFocus: false })

  // if (isLoading) return <span>Loading...</span>
  // if (error) return <span>Ooops! Something went wrong.</span>
  return (
    <>
      {loading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <div>
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
                {activities.slice(0).reverse().map((item) => {
                  if (item.type !== 'Workout') {
                    return (
                      <TableRow key={item.id} item= {item} />
                    )
                  }
                })
                }
              </Tbody>
            </Table>
          </Flex>
        </div>
      )}
    </>
  )
}

export default RunTable
