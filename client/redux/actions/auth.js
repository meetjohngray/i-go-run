import { STRAVA_AUTH_LOG_OUT, STRAVA_AUTH_START, STRAVA_AUTH_TOKEN_UPDATE, STRAVA_AUTH_TOKEN_VALIDATE } from '../constants/auth'

// To begin auth we request app access from strava and the user logs in. A token is returned
export const beginStravaAuthentication = () => ({
  type: STRAVA_AUTH_START
})

// The token must be validated against the app client id and secret
export const validateStravaToken = (code) => ({
  type: STRAVA_AUTH_TOKEN_VALIDATE,
  payload: code
})

// A validated app access only lasts so long. After a while we need to request a new token.
// When we do the new tokens must be saved
export const updateAuthTokens = ({
  refresh_token: refreshToken,
  expires_at: expiresAt,
  access_token: accessToken
}) => ({
  type: STRAVA_AUTH_TOKEN_UPDATE,
  payload: {
    isAuthenticated: true,
    refreshToken,
    expiresAt,
    accessToken
  }
})

// A user must be able to log out. When the app receives this request we will remove all data from storage,
//  remove tokens, and deauth the app with Starva
export const beginStravaDeauthentication = () => ({
  type: STRAVA_AUTH_LOG_OUT
})
