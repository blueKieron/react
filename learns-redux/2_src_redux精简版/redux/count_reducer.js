// 创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// 参数：之前的状态 动作对象
const INIT_STATE = 0
export default function countReducer(pre = INIT_STATE, action) {
  // if (pre === undefined) pre = 0
  const { type, data } = action;
  switch (type) {
    case "increment":
      return pre + data;
    case "decrement":
      return pre - data;
    default:
      return pre
  }
}
