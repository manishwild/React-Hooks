import React, { useState } from 'react'

const UseStateExample = () => {
  const [changTitle, setChangTitle] = useState('Hello World')
  // let title = 'Hello World'
  // simple way to create toggle function using useState hooks
  function clickHandler() {
    // if (changTitle === 'Hello World') {
    //   setChangTitle('Hello People')
    // } else {
    //   setChangTitle('Hello World')
    // }

    // shorthand
    changTitle === 'Hello World'
      ? setChangTitle('Hello People')
      : setChangTitle('Hello World')
  }

  return (
    <>
      <h1>{changTitle}</h1>
      <button type="button" className="btn" onClick={clickHandler}>
        Click Me
      </button>
    </>
  )
}

export default UseStateExample
