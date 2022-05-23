import React, { useState } from 'react'
import { data } from '../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
// removeItem function create filter and remover selected id
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
    // another way by function
    setPeople((oldValue) => {
      let newPeople = oldValue.filter((person) => person.id !== id)
      return newPeople
    })
  }
  return (
    <>
      <h2>Use State Array</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() =>removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Name
      </button>
    </>
  )
}

export default UseStateArray
