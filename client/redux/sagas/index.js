// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects'

// import the new async function we created
import { beginStravaAuthAsync, validatesStravaTokenAsync } from './auth'

export default function * rootSaga () {
  yield all([beginStravaAuthAsync(), validatesStravaTokenAsync()])
}
