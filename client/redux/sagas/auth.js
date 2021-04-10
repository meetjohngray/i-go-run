import { takeLeading, call } from 'redux-saga/effects'
import { STRAVA_AUTH_START } from '../constants/auth'

const clientID = process.env.REACT_APP_STRAVA_CLIENT_ID
console.log(clientID)
function handOffToStravaAuth () {
  // Get the current address of the app running ex. localhost ect.
  const { origin } = window
  // Push the Strava authorise url onto the browser window with our Public clientID and return url (origin)
  // Note the redirect_uri=${origin}/token - this is the token page we setup earlier
  window.location.assign(`https://www.strava.com/oauth/authorize?client_id=${clientID}&redirect_uri=${origin}/token&response_type=code&scope=activity:read_all`)
}

function * beginStravaAuthentication () {
  // A simple generator function
  // Just yields one other function - handOffToStravaAuth
  yield call(handOffToStravaAuth)
}

export function * beginStravaAuthAsync () {
  // This will listen for the first STRAVA_AUTH_START and then call beginStravaAuthentication
  yield takeLeading(STRAVA_AUTH_START, beginStravaAuthentication)
}
