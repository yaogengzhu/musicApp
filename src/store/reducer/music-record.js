import { MUSIC_RECORD } from '../actionType'

const initState = {
  weekData: []
}
export default (state = initState, action) => {
  console.log(action, 'xxeses')
  switch (action.type) {
    case MUSIC_RECORD:
      return {
        ...state,
        weekData: action.weekData
      }
    default:
      return state
  }
}