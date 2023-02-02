import { Details } from './Details.jsx'

export function CardContainer ({ firstName, lastName, employment, username, avatar }) {
  return (
    <section className='cardContainer'>
      <img src={avatar} alt='User avatar' />
      <Details firstName={firstName} lastName={lastName} employment={employment} username={username} />
    </section>
  )
}
