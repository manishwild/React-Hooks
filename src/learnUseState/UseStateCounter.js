import React, { useState } from 'react'

const UseStateCounter = () => {
  const [num, setNum] = useState(0);
  function resetHandler() {
    setNum(0)
    }
    function complexHandler() {
      setTimeout(() => {
        // setNum(num + 1)
        // this function will detect how many times we have click
        setNum((prevState) => {
          return prevState + 1
        })
      }, 5000);
    }
    // 2 sec 2000
  return (
    <>
      <h1>Use State Counter</h1>
      <section style={{ margin: '4rem 0' }}>
        <h2>Counter</h2>
        <h1>{num}</h1>
        <button className="btn" onClick={() => setNum(num + 1)}>
          Plus
        </button>
        <button className="btn" onClick={resetHandler}>
          Reset
        </button>
        <button className="btn" onClick={() => setNum(num - 1)}>
          Minus
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Complex Counter</h2>
        <h1>{num}</h1>
        <button className="btn" onClick={complexHandler}>Add Later</button>
      </section>
    </>
  )
}

export default UseStateCounter
