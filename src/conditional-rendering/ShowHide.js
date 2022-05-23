import React, { useEffect, useState } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h2>Show Hide</h2>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size:{size} Px</h2>
    </div>
  )
}

export default ShowHide
