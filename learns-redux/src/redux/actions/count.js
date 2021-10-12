// 专门为Count组件生成action对象
// import store from './store'
import {INCREMENT, DECREMENT} from '../constant'
// 同步action 就是指action的值为一般对象  
export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})
// 异步action 就是指action的值为函数,异步action中一般都会调用同步action
export const incrementAsync = (data,t) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    },t)
  }
}
 