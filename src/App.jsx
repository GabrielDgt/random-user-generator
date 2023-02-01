import { useState, useEffect } from 'react'

const API_URL = 'https://random-data-api.com/api/v2/users?response_type=json'

export function App () {
  const [data, setData] = useState(null)
  const [user, setUser] = useState()
  const [avatar, setAvatar] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(data => {
        setData(data)
      })
    // window.addEventListener('load', handleCLick)
  }, [data])

  const handleCLick = () => {
    const { username, avatar, first_name, last_name, email } = data
    setUser(username)
    setAvatar(avatar)
    setFirstName(first_name)
    setLastName(last_name)
    setEmail(email)
  }

  return (
    <main className='container'>
      <section className='cardContainer'>
        <span className='imgContainer'><img src={avatar} alt='User avatar' /></span>
        <span>
          <h3>{firstName} {lastName}</h3>
          <h4 className='details'>Username: <span>{user}</span></h4>
          <h6>Email: {email}</h6>
        </span>
      </section>
      <button className='generatorBtn' onClick={handleCLick}>Generate Random User</button>
    </main>
  )
}
