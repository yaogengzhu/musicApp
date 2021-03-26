import { combineReducers } from 'redux'
import auth from './reducer/auth'
import user from './reducer/user'

export default combineReducers({
  user,
  auth
})