import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { beginStravaAuthentication } from '../redux/actions/auth'
import { getActivities } from '../redux/actions/activities'
import { Flex, Button, Text } from '@chakra-ui/react'
import RunTable from './RunTable'

const HomePage = () => {
  // get the auth state so we can use to hide the button when authenicated
  const auth = useSelector((state) => state.auth)
  const activities = useSelector((state) => state.activities)
  // create a dispatch function
  const dispatch = useDispatch()

  return (
    <Flex flexDirection='column'>
      { auth.isAuthenticated ? (
        <Flex flexDirection='column'>
          <Text textAlign='center' my='2'>Logged In</Text>
          <Button type='button' onClick={() => dispatch(getActivities())}>Sync Activities</Button>
          <RunTable data={activities} />
        </Flex>
      ) : (
        // add the dispatch to the button onClick
        <Button type='button' onClick={() => dispatch(beginStravaAuthentication())}>Authorise On Strava</Button>
      )}
    </Flex>
  )
}

export default HomePage
