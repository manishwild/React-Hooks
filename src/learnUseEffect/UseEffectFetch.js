import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetch = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setUsers(user)
    console.log(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h2>useEffect Fetch Data</h2>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((person) => {
          const { id, login, avatar_url, html_url } = person
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetch
