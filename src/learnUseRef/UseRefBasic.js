import React, { useEffect, useRef } from 'react'

const UseRefBasic = () => {
  const refContainer = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }
  
  useEffect(() => {
    refContainer.current.focus()
  }, [])
  return (
    <>
      <h2>Use Ref Basic</h2>
      <form action="" className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" name="" id="" ref={refContainer} />
        </div>
        <button >Submit</button>
      </form>
    </>
  )
}

export default UseRefBasic
