import { STRAVA_AUTH_TOKEN_UPDATE } from '../constants/auth'

const initialState = {
  isAuthenticated: false
}

export default function (state = initialState, action) {
  if (!action) return state

  switch (action.type) {
    case STRAVA_AUTH_TOKEN_UPDATE:
    // Save items to local storage
      localStorage.setItem('refreshToken', action.payload.refresh_token)
      localStorage.setItem('expiresAt', action.payload.expires_at)
      localStorage.setItem('accessToken', action.payload.access_token)

      // Update the state to show the app user is logged in
      return { ...state, isAuthenticated: true }

    default:
      return state
  }
}
