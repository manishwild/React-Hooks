import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('');


  const [people, setPeople] = useState([])

  function submitHandler(e) {
    e.preventDefault()
    console.log(firstName, email)
    if (firstName && email && age) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
        age
      }
      console.log(person)
      setPeople((peoples) => {
        return [...peoples, person]
      })
      setFirstName('')
      setEmail('')
      setAge('')
    } else {
      console.log('empty value')
    }
  }
  return (
    <>
      <h2>Forms</h2>
      <h3>multiple Inputs</h3>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn">Add Person</button>
        </form>
        {people.map((persons) => {
          const { id, firstName, email, age } = persons
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{age}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
