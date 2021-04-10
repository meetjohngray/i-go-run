// single entry point to start all Sagas at once
import { all } from 'redux-saga/effects'

// import the new async function we created
import { beginStravaAuthAsync } from './auth'
import { validatesStravaTokenAsync } from './auth'

export default function * rootSaga () {
  yield all([beginStravaAuthAsync(), validatesStravaTokenAsync()])
}
