import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <h1>404</h1>
      <h2>Error! PAGE not Found</h2>
      <Link to="/">Home</Link>
    </>
  )
}

export default Error
