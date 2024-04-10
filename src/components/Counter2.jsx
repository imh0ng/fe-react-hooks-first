import React, {useState, useEffect} from 'react'

const Counter2 = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // useState와 useEffect를 둘다 사용해주셔서 진행해주시면 됩니다!
  const [count_2, counterFunction] = useState(0)
  const countButton = () => {
    counterFunction(count_2 + 1)
    console.log("count 값이 변경되었습니다.")
  }

  const [text, textFunction] = useState('')
  const textfield = (e => {
    textFunction(e.target.value)
    console.log("text 값이 변경되었습니다.")
  })

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.")
  }, [])
  
  return (
    <div className="counter">
      <h>Counter 2</h>
      <hr></hr>
      <h3>{count_2}</h3>
      <button onClick={countButton}>+1</button>
      <hr></hr>
      <input type={'text'} onChange={textfield}></input>
      <h3>{text}</h3>
    </div>
  )
}

export default Counter2
