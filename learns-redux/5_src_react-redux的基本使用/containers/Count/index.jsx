// 引入Count的UI组件
import CountUI from '../../components/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
// 引入store
import store from '../../redux/store'
// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux'

// mapStateToProps函数的返回值作为状态传递给ui组件
function mapStateToProps(state){
  return {count: state}
}
// mapDispatchToProps传递操作状态的方法
function mapDispatchToProps(dispatch){
  return {
    add:(value) => {
      // 通知redux进行加法
      dispatch(createIncrementAction(value))
    },
    sub:(value) => {
      // 通知redux进行减法
      dispatch(createDecrementAction(value))
    },
    addAsync: (value,t) => {
      dispatch(createIncrementAsyncAction(value,t))
    }
  }
}
// 创建Count的容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)
export default CountContainer