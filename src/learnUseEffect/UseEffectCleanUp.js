import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth)

  function checksize() {
    setSize(window.innerWidth)
    }
 // inside useEffect cleanup function will help meomory leak (it will not render if something change)
  useEffect(() => {
    console.log('UseEffect')
    window.addEventListener('resize', checksize)
    // return () => {
    //   console.log('CleanUp')
    //   window.removeEventListener('resize', checksize)
    // }
  },[])
  return (
    <>
      <h1>UseEffect CleanUp</h1>
      <br />
      <h2>Window Size: {size} PX</h2>
    </>
  )
}

export default UseEffectCleanUp
