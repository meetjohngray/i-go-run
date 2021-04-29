import unionBy from 'lodash/unionBy'

import { ACTIVITIES_PAGE_LOADING_COMPLETE } from '../constants/activities'

const initialState = {
  activities: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVITIES_PAGE_LOADING_COMPLETE:
      // unionBy will merge 2 sets of data by a property on the objects, here the id
      // if we reimport data at a later date when duplicate ids are ignored
      const activities = unionBy(state.activities, action.payload, 'id')
      return { ...state, activities }
    default:
      return state
  }
}
