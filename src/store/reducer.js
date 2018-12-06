const defaultState = {
  inputValue: 'defaultValue',
  list: [1, 2, 3]
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      const newState = { ...state }
      newState.inputValue = action.value
      console.log('object', newState);
      return newState
    default:
      return state
  }
}
