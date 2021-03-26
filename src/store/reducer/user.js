import { UPDATE_USER } from '@/store/actionType'

const initState = {
  account: {},
  profile: {}
}
export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        account: action.account,
        profile: action.profile
      }
    default:
      return state
  }
}