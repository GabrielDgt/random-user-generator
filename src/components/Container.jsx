import React from 'react'
import { CardContainer } from './CardContainer.jsx'

export function Container ({ firstName, lastName, employment, username, avatar, handleCLick }) {
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
