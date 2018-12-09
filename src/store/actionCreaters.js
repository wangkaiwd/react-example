// 在这里进行创建action并进行统一管理
// 好处：方便调试、管理以及自动化测试
import { CHANGE_INPUT_VALUE, ADD_TODOS, DELETE_TODOS, ININT_TODOS } from './actionTypes'
export const changeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const addTodosAction = () => ({
  type: ADD_TODOS
})
export const deleteTodosAction = (index) => ({
  type: DELETE_TODOS,
  index
})
export const initTodosAction = (data) => ({
  type: ININT_TODOS,
  data
})
