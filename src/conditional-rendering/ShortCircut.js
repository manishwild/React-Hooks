import React, { useState } from 'react'

//short circut evaluation
// ternary operator

const ShortCircut = () => {
  const [text, setText] = useState('')
  const [isError, setisError] = useState(false);
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>{secondValue}</h2> */}
      <h1>{text || 'Manish'}</h1>
      <button className="btn" onClick={() => setisError(!isError)}>Toggle Error</button>
      {/* {!text && <h1>Hello World</h1>} */}
      {isError && <h1>Error ...</h1>}
      {isError ? <p>There is error</p> : <div><h2>There is no error</h2></div> }
    </>
  )
}
  // && is if it true it will show error
export default ShortCircut
