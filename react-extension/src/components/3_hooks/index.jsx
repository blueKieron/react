import React from "react";
import ReactDOM from 'react-dom'
export default function Index() {
  const [count, setCount] = React.useState(0);
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count +1)
    },1000)
    return () => {
      clearInterval(timer)
    }
  },[])
  return (
    <div>
      <h2>total:{count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={unmount}>unmount</button>
      <br/>
      <input type="text" ref={myRef}></input><butto onClick="show">show</butto>
    </div>
  );
  function add() {
    // setCount(count + 1); //第一种
    setCount((count) => count +1)
  }
  // 卸载组件
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  // 提示输入的回调
  function show(){
    alert(myRef.current.ref)
  }
}
