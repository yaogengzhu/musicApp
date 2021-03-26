import { UPDATE_USER } from '../actionType'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}