import React, { useState } from 'react'
import { CardDetails } from './CardDetails.jsx'
import { fetchData } from './../helpers/fetchData'

export const ContextData = React.createContext(null)

export function Container () {
  const [data, setData] = useState(null)

  const handleCLick = () => {
    fetchData().then(resp => {
      setData(resp)
    })
  }

  return (
    <ContextData.Provider value={data}>
      <main className='container'>
        <CardDetails />
        <button
          className='generatorBtn'
          onClick={handleCLick}
        >
          Generate Random User
        </button>
      </main>
    </ContextData.Provider>
  )
}
