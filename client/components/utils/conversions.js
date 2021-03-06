import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export function parseTotalTime (timeStr) {
  return dayjs(timeStr, ['MMMM-DD-YYYY', 'MMMM-D-YYYY']).format('YYYY-MM-DD [at] H:mm:ss')
}

export function parseElapsedTime (timeStr) {
  const regex = /hour/
  if ((timeStr.search(regex) > -1) && Number(timeStr.substring(0, 2)) > 24) {
    let parsedTimeStr = `${Number(timeStr.substring(0, 2)) - 24} ${timeStr.substring(3)}`
    parsedTimeStr = `1:${dayjs(parsedTimeStr, ['HH:mm:ss', 'mm:ss']).format('H:mm:ss')}`
    return parsedTimeStr
  } else {
    return dayjs(timeStr, ['HH:mm:ss', 'mm:ss']).format('H:mm:ss')
  }
}
