import React, { useState } from 'react'

const MultipleInputs = () => {

  const [user, setUser] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  function inputHandler(e) {
    const name = e.target.name
    const value = e.target.value
    //console.log(name,value) 
    // setting it dynamically
    setUser({ ...user, [name]: value })
  }

  function submitHandler(e) {
    e.preventDefault()
    if (user.firstName && user.email && user.age) {
      const person = {
        ...user, id: new Date().getTime().toString(),
      }
      setPeople([...people, person])
      setUser({ firstName: '', email: '', age: '' })
    }
  }
  return (
    <>
      <h2>Forms</h2>
      <h3>multiple Inputs</h3>
      <article>
        <form className="form" >
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={inputHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={inputHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              name="age"
              id="age"
              value={user.age}
              onChange={inputHandler}
            />
          </div>
          <button type='submit' className="btn" onClick={submitHandler}>Add Person</button>
        </form>
        {people.map((persons) => {
          const { id, firstName, email, age } = persons
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default MultipleInputs