import { CHANGE_INPUT_VALUE, ADD_TODOS, DELETE_TODOS } from '@/store/actionTypes';
const defaultState = {
  inputValue: '',
  list: [1, 2, 3]
}
// reducer可以接收state,但是不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      const newState = { ...state }
      newState.inputValue = action.value
      return newState
    case ADD_TODOS:
      const newState1 = { ...state }
      newState1.list = [...state.list, state.inputValue]
      newState1.inputValue = ""
      return newState1
    case DELETE_TODOS:
      const newState2 = { ...state }
      newState2.list.splice(action.value, 1)
      return newState2
    default:
      return state
  }
}
