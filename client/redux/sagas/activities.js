import get from 'lodash/get'
import dayjs from 'dayjs'
import { call, put, select, takeLeading } from 'redux-saga/effects'

import { apiClient } from '../../apis'
import { validateAuthTokens } from './auth'
import { ACTIVITIES_PAGE_LOADING_COMPLETE, ACTIVITIES_SYNC_START } from '../constants/activities'
import { setActivitiesState } from '../actions/activities'
import { delay } from 'lodash'

const getActivity = (epoch, page = 1) => {
  // Get the data from Strava starting from 'epoch' and with the page number of 'page'
  return apiClient({
    url: `/athlete/activities?per_page=30&after=${epoch}&page=${page}`,
    method: 'get'
  })
    .then((response) => {
    // Return the data
      return response
    })
    .catch((err) => {
      throw err
    })
}

const getLastActivityTimestamp = (state) => {
  // The epoch is dependent on the last activity date if we have one
  // This is so that we only get activities that we don't already have
  const lastActivity = state.activities.activities.slice(-1)[0]
  const lastDate = get(lastActivity, 'start_date')

  if (lastDate) {
    // return the unix timestamp of the last date
    return dayjs(lastDate).unix()
  }

  // Manually set a year (either in the env or default to 2019)
  // If there are LOTS of activitites, you may run out of localstorage
  const initialYear = Number(process.env.REACT_APP_INITIALYEAR || 2020)

  // Create a timestamp for this year
  return dayjs().year(initialYear).startOf('year').unix()
}

function * updateAtheleteActivity () {
  // Set activities_sync_state
  yield put(setActivitiesState({ loading: true }))

  // 1. Check the tokens are valid and update as needed
  yield call(validateAuthTokens)

  // 2. Set the page and epoch - the epoch depends on the last activity date
  let page = 1
  const epoch = yield select(getLastActivityTimestamp)

  try {
    while (true) {
      // Loop through the pages until we manually break the cycle
      // Start the process of getting a page from Strava
      const { data } = yield call(getActivity, epoch, page)

      // Page has no activities - last page reached
      if (!data.length) {
        // If the result has an empty array (no activities) then end the sync
        break
      } else {
        // Put the data into redux and let the activity reducer merge it
        yield put({ type: ACTIVITIES_PAGE_LOADING_COMPLETE, payload: data })

        // Next slide please!
        page += 1
      }
    }
  } catch (err) {
    yield console.log(err)
  }
  // Just so the users feel like something is happening...
  // This is kind of hacky, tuturial did not have a func as first arg, making this throw an error
  yield delay(() => {}, 3000)
  // ...and back to the non-loading state
  yield put(setActivitiesState({ loading: false }))
}

export function * watchUpdateAthleteActivitiesAsync () {
  yield takeLeading(ACTIVITIES_SYNC_START, updateAtheleteActivity)
}
