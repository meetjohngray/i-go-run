import dayjs from 'dayjs'
// import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
// dayjs.extend(customParseFormat)
dayjs.extend(duration)

export function parseDate (timeStr) {
  return dayjs(timeStr).format('YYYY-MM-DD [at] h:mm:ss')
}

export function parseElapsedTime (timeStr) {
  let elapsedTime = dayjs.duration(timeStr, 's').format('D:HH:mm:ss')
  console.log('Unparsed Elapsed Time', elapsedTime)
  const regex = /^0:0/
  const regex2 = /^0:00:/
  if (!elapsedTime.search(regex2)) {
    elapsedTime = `${elapsedTime.toString().substring(5)}`
  } else if (!elapsedTime.search(regex)) {
    elapsedTime = `${elapsedTime.toString().substring(2)}`
  }
  return elapsedTime
}

export function getMiles (distance) {
  return (distance * 0.0006213712).toFixed(2)
}

export function getPace (timeSeconds, distance) {
  let pace = (timeSeconds / (getMiles(distance)) / 60).toFixed(2)
  pace = dayjs.duration(pace, 'm').format('mm:ss')
  return pace
}

export function metersToFeet (elevationInMeters) {
  const elevationInFeet = Math.round((elevationInMeters * 3.2808).toFixed(2))
  return elevationInFeet
}
