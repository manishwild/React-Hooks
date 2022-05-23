import React, { useReducer, useState } from 'react'
import { data } from './../data'
import Modal from './Modal'

// reducer function
const reducer = (state, action) => {
  if (action.type === 'Testing') {
    return { ...state, people: data, isModalOpen: true, modalContent: 'item added' }
  }
  return state
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}
//33
const Index = () => {
  const [name, setName] = useState('')
  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)
  const [state, dispatch] = useReducer(reducer, defaultState)

  function submitHandler(e) {
    e.preventDefault()
    if (name) {
      dispatch({ type: 'Testing' })
    } else {
    }
  }
  return (
    <>
      <h2>UseReducer</h2>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={submitHandler} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
