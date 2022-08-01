import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/UseStateExample">UseStateExample</Link>
      <Link to="/UseStateArray">UseStateArray</Link>
      <Link to="/UseStateObject">UseStateObject</Link>
      <Link to="/UseStateCounter">UseStateCounter</Link>
      <Link to="/UseEffectCleanUp">UseEffectCleanUp</Link>
      <Link to="/useeffectfetch">useeffectfetch</Link>
      <Link to="/MultipleReturns">MultipleReturns</Link>
      <Link to="/ShortCircut">ShortCircut</Link>
      <Link to="/ShowHide">ShowHide</Link>
      <Link to="/UseRefBasic">UseRefBasic</Link>
      <Link to="/PropDrilling">PropDrilling</Link>
      <Link to="/ContextApi">ContextApi</Link>
      <Link to="/CustomHook">CustomHook</Link>
      <Link to="/IndexMemo">IndexMemo</Link>
      <Link to="/IndexProp">IndexProp</Link>
      <Link to="/IndexReducer">IndexReducer</Link>
      <Link to="/MultipleInputs">MultipleInputs</Link>
      <Link to="/ControlledInputs">ControlledInputs</Link>
      <Link to="/UseEffectBasic">UseEffectBasic</Link>
    </nav>
  )
}

export default Navbar
