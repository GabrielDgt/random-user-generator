import { useState, useEffect } from 'react'
import './App.css'
import { Container } from './components/Container.jsx'

const API_URL = 'https://random-data-api.com/api/v2/users?response_type=json'

export function App () {
  const [data, setData] = useState(null)
  const [username, setUsername] = useState()
  const [avatar, setAvatar] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [employment, setEmployment] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data)
      })
    window.addEventListener('load', handleCLick)
  }, [data])

  const handleCLick = () => {
    const { username, avatar, first_name, last_name, employment } = data
    const { title } = employment
    setUsername(username)
    setAvatar(avatar)
    setFirstName(first_name)
    setLastName(last_name)
    setEmployment(title)
  }

  return (
    <Container
      firstName={firstName}
      lastName={lastName}
      employment={employment}
      username={username}
      avatar={avatar}
      handleCLick={handleCLick}
    />
  )
}
