import React, { useReducer, useState } from 'react'
//import { data } from './../data'
import Modal from './Modal'
import { reducer } from './reducer'

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
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'Closed_Modal' })
  }

  return (
    <>
      <h2>UseReducer</h2>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'Remove_Item', payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
