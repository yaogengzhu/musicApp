import { LOGIN } from '../actionType'


const defaultState = {
  cookie: null,
  token: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        cookie: action.cookie,
        token: action.token
      }
    default:
      return state
  }
}