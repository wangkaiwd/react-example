import { CHANGE_INPUT_VALUE, ADD_TODOS, DELETE_TODOS, ININT_TODOS } from '@/store/actionTypes';
const defaultState = {
  inputValue: '',
  list: []
}
// reducer可以接收state,但是不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    // 这里如果是通过字符串进行书写的话，字符串拼写错误的话，只是不执行这个判断
    // 并不会报错，不容易排查出错误原因
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
      newState2.list.splice(action.index, 1)
      return newState2
    case ININT_TODOS:
      const newState3 = { ...state }
      newState3.list = action.data
      // 返回给store,store会自动更改state
      return newState3
    default:
      return state
  }
}
