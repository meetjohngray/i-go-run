import unionBy from 'lodash/unionBy'

import { ACTIVITIES_PAGE_LOADING_COMPLETE, ACTIVITIES_SYNC_STATE } from '../constants/activities'

const initialState = {
  activities: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVITIES_SYNC_STATE:
      // merge our payload in
      return { ...state, ...action.payload }
    case ACTIVITIES_PAGE_LOADING_COMPLETE:
      // unionBy will merge 2 sets of data by a property on the objects, here the id
      // if we reimport data at a later date when duplicate ids are ignored
      const activities = unionBy(state.activities, action.payload, 'id')
      return { ...state, activities }
    default:
      return state
  }
}
