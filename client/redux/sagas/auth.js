import { takeLeading, call, put } from 'redux-saga/effects'
import { STRAVA_AUTH_START, STRAVA_AUTH_TOKEN_VALIDATE } from '../constants/auth'
import { push } from 'connected-react-router'

import { tokenClient } from '../../apis'
import { updateAuthTokens } from '../actions/auth'

const clientID = process.env.REACT_APP_STRAVA_CLIENT_ID
// Add! THIS SHOULD ONLY BE DONE FOR NON-PRODUCTION!
// THE SECRET SHOULD BE ON A NON CLIENT APP (ie backend or lambda like Netlify)
const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET

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

const apiValidateToken = (code) => {
  return tokenClient({
    url: './token',
    method: 'post',
    params: {
      client_id: clientID,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code'
    }
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      Promise.reject(error)
    })
}

function * validateStravaToken ({ payload: code }) {
  // Here you could dispatch a loading start action

  // We dispatch an api call to validate the tokens and it returns a data object with the values we need
  const data = yield call(apiValidateToken, code)

  // Push the action type: STRAVA_AUTH_TOKEN_UPDATE with the data
  yield put(updateAuthTokens(data))

  yield put(push('./')) // Push the browser to the root when we are done

  // Here we could dispatch a loading end action
}

export function * validatesStravaTokenAsync () {
  // Listen for STRAVA_AUTH_TOKEN_VALIDATE
  yield takeLeading(STRAVA_AUTH_TOKEN_VALIDATE, validateStravaToken)
}

const updateRefreshToken = () => {
  // Get the refresh token from localStorage
  const refreshToken = localStorage.getItem('refreshToken')

  // using the token client we then post to the token endpoint with
  // our client_id, client_secret, the refresh_token
  // In a real world app we would pass our refresh_token to a backend where
  // we can keep the client_secret a secret!
  return tokenClient({
    url: '/token',
    method: 'post',
    params: {
      client_id: clientID,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }
  })
    .then((response) => {
    // Return the new tokens and timestamps to be handled
      return response.data
    })
    .catch((error) => {
      throw new Error(error)
    })
}

const tokenIsValid = () => {
  // Get the existing token from localStorage
  const expiresAt = localStorage.getItem('expiresAt')
  // Create a new expires timestamp for now down to the second
  const now = Math.floor(Date.now() / 1000)
  // Check if the expires timestamp is less than now - meaning it has expired
  return now < expiresAt
}

export function * validateAuthTokens () {
  // 1. call the function to check if the token is valid
  const validToken = yield call(tokenIsValid)

  // 2. If the token is invalid, then start the process to get a new one
  if (!validToken) {
    // Call the function to get new refresh tokens
    const data = yield call(updateRefreshToken)
    // put the action to handle the token updates (which stores them in localStorage)
    yield put(updateAuthTokens(data))
  }
}
