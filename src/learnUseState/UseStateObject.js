import React from 'react'

const UseStateObject = () => {
  // const [person, setPerson] = React.useState({
  //   name: 'Manish',
  //   age: 35,
  //   message: 'Hello World',
  // })
  
  // we can use this way also and change state for example name, age
  const [name, setName] = React.useState('Manish')
  const [age, setAge] = React.useState(35)
  const [message, setMessage] = React.useState('Hello World')
  function changeMessage() {
    // setPerson({ ...person, message: 'Hello People' })
    setMessage('Hello People')
  }
  return (
    <>
      <h1>UseStateObject</h1>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
