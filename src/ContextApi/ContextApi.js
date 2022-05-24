import React, { createContext, useState, useContext } from 'react'
import { data } from './../data'

const UserContext = createContext()
// two Components - Provider, Consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((pep) => {
      return pep.filter((person) => person.id !== id)
    })
  }
  return (
    <UserContext.Provider value={{ removePerson, people }}>
      <h3>Context Api</h3>
      <List />
    </UserContext.Provider>
  )
}

const List = () => {
  const mainData = useContext(UserContext)

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(UserContext)
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  )
}

export default ContextApi
