import { combineReducers } from 'redux'
import auth from './reducer/auth'
import user from './reducer/user'
import music from './reducer/music-record'
import test from './reducer/test'

export default combineReducers({
  user,
  auth,
  music,
  test
})