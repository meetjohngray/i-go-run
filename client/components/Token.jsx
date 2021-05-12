// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import queryString from 'query-string'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'
import { validateStravaToken } from '../redux/actions/auth'

const Token = () => {
  const location = useSelector((state) => state.router.location)
  // Get the current auth state and setup a dispatch
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    // Check if user/app is authenticated
    // Get code from the query string
    const { code } = queryString.parse(location.search)
    if (!auth.isAuthenticated && code) {
      // Dispatch the validation code to be handled by saga
      dispatch(validateStravaToken(code))
    } else {
      // Push back to the home page bc the user is authenticated or there is no code
      dispatch(push('/'))
    }
  }, [])

  return null
}

export default Token
