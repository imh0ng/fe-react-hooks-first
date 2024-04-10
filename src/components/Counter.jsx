import React, {useState} from 'react'

const Counter = () => {
  const [count, counterFunction] = useState(0);
  return (
    <div className="counter">
      <h>Counter 1</h>
      <hr></hr>
      <p>{count}</p>
      <button onClick={() => counterFunction(count - 1)}>-1</button>
      <button onClick={() => counterFunction(count + 1)}>+1</button>
    </div>
  )
}

export default Counter
