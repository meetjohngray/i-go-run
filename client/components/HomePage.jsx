import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { beginStravaAuthentication } from '../redux/actions/auth'

const HomePage = () => {
  // get the auth state so we can use to hide the button when authenicated
  const auth = useSelector((state) => state.auth)
  // create a dispatch function
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Home</h1>

      { auth.isAuthenticated ? (
        <h2>Logged In</h2>
      ) : (
        // add the dispatch to the button onClick
        <button type='button' onClick={() => dispatch(beginStravaAuthentication())}>Authorise On Strava</button>
      )}
    </div>
  )
}

export default HomePage
