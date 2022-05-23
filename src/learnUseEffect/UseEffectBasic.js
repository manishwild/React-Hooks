import React, { useEffect, useState } from 'react'

// useEffect runs after every re-render
// useEffect only run once if there is no dependency. if value change useEffect run every time. 
//sideEffect
const UseEffectBasic = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value >= 1) {
      document.title = `Hello World ${value}`
    }
  },[value] )

  // it will run only one time
  // you will see helloworld 2 times beacuse of react.stistmode in index.js if we remove it. it will be shown one time or rerender when something is changed
  useEffect(() => {
   console.log(`Hello People`)
  }, []);
  return (
    <>
      <h1>Use Effect Basic</h1>

      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Click Me!</button>
    </>
  )
}

export default UseEffectBasic
