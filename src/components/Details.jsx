export function Details ({ firstName, lastName, employment, username }) {
  return (
    <section className='details'>
      <h2>{firstName} {lastName}</h2>
      <h3>{employment}</h3>
      <h4>{username && `@${username}`}</h4>
    </section>
  )
}
