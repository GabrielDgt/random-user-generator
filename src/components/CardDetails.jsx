import { useContext } from 'react'
import { ContextData } from './Container'

export function CardDetails () {
  const dataAux = useContext(ContextData)
  if (dataAux === null) return null
  return (
    <section className='cardDetails'>
      <img src={dataAux.avatar && dataAux.avatar} alt='User avatar' />
      <section className='details'>
        <h2>{dataAux.first_name && dataAux.first_name} {dataAux.last_name && dataAux.last_name}</h2>
        <h3>{dataAux.employment.title && dataAux.employment.title}</h3>
        <h4>{dataAux.username && `@${dataAux.username}`}</h4>
      </section>
    </section>
  )
}
