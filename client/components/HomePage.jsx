import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { beginStravaAuthentication } from '../redux/actions/auth'
import { getActivities } from '../redux/actions/activities'
import Summary from './Summary'

const HomePage = () => {
  // get the auth state so we can use to hide the button when authenicated
  const auth = useSelector((state) => state.auth)
  const activities = useSelector((state) => state.activities)
  // create a dispatch function
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Home</h1>

      { auth.isAuthenticated ? (
        <>
          <h2>Logged In</h2>
          <button type='button' onClick={() => dispatch(getActivities())}>Sync Activities</button>
          <Summary data={activities} />
        </>
      ) : (
        // add the dispatch to the button onClick
        <button type='button' onClick={() => dispatch(beginStravaAuthentication())}>Authorise On Strava</button>
      )}
    </div>
  )
}

export default HomePage
