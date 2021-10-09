// 创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// 参数：之前的状态 动作对象
import {INCREMENT, DECREMENT} from '../constant'
const INIT_STATE = 0
export default function countReducer(pre = INIT_STATE, action) {
  // if (pre === undefined) pre = 0
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return pre + data;
    case DECREMENT:
      return pre - data;
    default:
      return pre
  }
}
