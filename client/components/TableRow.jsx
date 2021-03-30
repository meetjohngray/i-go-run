import React from 'react'
import { Tr, Td, Link } from '@chakra-ui/react'
import { parseTotalTime, parseElapsedTime, getMiles, getPace } from './utils/conversions'

function TableRow (props) {
  return (
    <Tr key={props.item.id}>
      <Td>{parseTotalTime(props.item.dateTime)}</Td>
      <Td>{getMiles(props.item.distance)} Miles</Td>
      <Td>{parseElapsedTime(props.item.elapsedTime)}</Td>
      <Td>{getPace(props.item.timeInSeconds, props.item.distance)}</Td>
      <Td>Elevation Gain</Td>
      <Td><Link href={props.item.stravaLink}>Strava</Link></Td>
    </Tr>
  )
}

export default TableRow
