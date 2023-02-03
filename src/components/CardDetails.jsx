export function CardContainer ({ firstName, lastName, employment, username, avatar }) {
  return (
    <section className='cardContainer'>
      <img src={avatar && avatar} alt='User avatar' />
      <section className='details'>
        <h2>{firstName && firstName} {lastName && lastName}</h2>
        <h3>{employment && employment}</h3>
        <h4>{username && `@${username}`}</h4>
      </section>
    </section>
  )
}
