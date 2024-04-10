import React, {useState} from 'react'

const Name = () => {
  const [name, nameFunction] = useState('')
  const namefield = (e => {
    nameFunction(e.target.value)
  })

  const [nickname, nicknameFunction] = useState('')
  const nicknamefield = (e => {
    nicknameFunction(e.target.value)
  })


  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" onChange={namefield}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={nicknamefield}/>
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
    </div>
  )
}

export default Name
