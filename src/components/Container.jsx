import React, { useState, useContext } from 'react'
import { CardDetails } from './CardDetails.jsx'
import { fetchData } from './../helpers/fetchData'

export const ContextData = React.createContext(null)

// function CardDetails () {
//   const dataAux = useContext(ContextData)
//   if (dataAux === null) return null
//   return (
//     <section className='cardDetails'>
//       <img src={dataAux.avatar ?? dataAux.avatar} alt='User avatar' />
//       <section className='details'>
//         <h2>{dataAux.first_name ?? dataAux.first_name} {dataAux.last_name ?? dataAux.last_name}</h2>
//         <h3>{dataAux.employment.title ?? dataAux.employment.title}</h3>
//         <h4>{dataAux.username ?? `@${dataAux.username}`}</h4>
//       </section>
//     </section>
//   )
// }

export function Container () {
  const [data, setData] = useState(null)
  // const [avatar, setAvatar] = useState()
  // const [username, setUsername] = useState()
  // const [firstName, setFirstName] = useState()
  // const [lastName, setLastName] = useState()
  // const [employment, setEmployment] = useState()

  const handleCLick = () => {
    fetchData().then(resp => {
      setData(resp)
      // setAvatar(resp.avatar)
      // setUsername(resp.username)
      // setEmployment(resp.employment.title)
      // setFirstName(resp.first_name)
      // setLastName(resp.last_name)
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
