import React from 'react'
import { Tr, Td, Link } from '@chakra-ui/react'
import { parseTotalTime, parseElapsedTime, getMiles, getPace } from './utils/conversions'

function TableRow (props) {
  return (
    <Tr key={props.item.id}>
      <Td>{parseTotalTime(props.item.start_date_local)}</Td>
      <Td>{getMiles(props.item.distance)} Miles</Td>
      <Td>{parseElapsedTime(props.item.elapsed_time)}</Td>
      <Td>{getPace(props.item.moving_time, props.item.distance)}</Td>
      <Td>{props.item.total_elevation_gain}</Td>
      {/* <Td><Link href={props.item.stravaLink}>Strava</Link></Td> */}
    </Tr>
  )
}

export default TableRow
