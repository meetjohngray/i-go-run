import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
dayjs.extend(customParseFormat)
dayjs.extend(duration)

export function parseTotalTime (timeStr) {
  return dayjs(timeStr, ['MMMM-DD-YYYY', 'MMMM-D-YYYY']).format('YYYY-MM-DD [at] H:mm:ss')
}

export function parseElapsedTime (timeStr) {
  // const regex = /hour/
  // if ((timeStr.search(regex) > -1) && Number(timeStr.substring(0, 2)) > 24) {
  //   let parsedTimeStr = `${Number(timeStr.substring(0, 2)) - 24} ${timeStr.substring(3)}`
  //   parsedTimeStr = `1:${dayjs(parsedTimeStr, ['HH:mm:ss', 'mm:ss']).format('H:mm:ss')}`
  //   return parsedTimeStr
  // } else {
  return dayjs(timeStr, ['HH:mm:ss', 'mm:ss']).format('H:mm:ss')
  // }
}

export function getMiles (distance) {
  return (distance * 0.0006213712).toFixed(2)
}

export function getPace (timeSeconds, distance) {
  let pace = (timeSeconds / (getMiles(distance)) / 60).toFixed(2)
  pace = dayjs.duration(pace, 'm').format('mm:ss')
  return pace
}
