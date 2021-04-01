export default (state = { list: [{ a: 1 }] }, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
      }
    default:
      return state
  }
}
