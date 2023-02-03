import React, { useState } from 'react'
import { CardContainer } from './CardDetails.jsx'
import { fetchData } from './../helpers/fetchData'

export function Container () {
  const [avatar, setAvatar] = useState()
  const [username, setUsername] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [employment, setEmployment] = useState()

  const handleCLick = () => {
    fetchData().then(resp => {
      setAvatar(resp.avatar)
      setUsername(resp.username)
      setEmployment(resp.employment.title)
      setFirstName(resp.first_name)
      setLastName(resp.last_name)
    })
  }

  return (
    <main className='container'>
      <CardContainer
        firstName={firstName}
        lastName={lastName}
        employment={employment}
        username={username}
        avatar={avatar}
      />
      <button
        className='generatorBtn'
        onClick={handleCLick}
      >
        Generate Random User
      </button>
    </main>
  )
}
