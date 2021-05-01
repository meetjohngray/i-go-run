import { ACTIVITIES_SYNC_START, ACTIVITIES_SYNC_STATE } from '../constants/activities'

export const getActivities = () => ({
  type: ACTIVITIES_SYNC_START
})

export const setActivitiesState = (data) => ({
  type: ACTIVITIES_SYNC_STATE,
  payload: data
})
