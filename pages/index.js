import React from 'react'
import WrapLayout from '../components/WrapLayout'
import PrefixedLink from '../components/PrefixedLink'

const Index = () => {
  const shows = [
    { id: 975, name: 'Batman' },
    { id: 481, name: 'The Batman' },
    { id: 504, name: 'Batman Beyond' },
    { id: 757, name: 'Batman: The Animated Series' },
    { id: 3557, name: 'Beware the Batman' },
    { id: 11464, name: 'Batman Unlimited' },
    { id: 900, name: 'Batman: The Brave and the Bold' },
    { id: 22309, name: 'Batman: Black and White' },
    { id: 5951, name: 'The New Batman Adventures' },
    { id: 33618, name: 'The Adventures of Batman' }
  ]
  const dirName = '/show/'
  const p_id = '[id]'

  return (
    <WrapLayout>
      <h1>batman list</h1>
      <ul>
        {shows.map(show => {
          const id = show.id
          const name = show.name
          return (
            <li key={id}>
              <PrefixedLink href={`${dirName}${id}`} as={`${dirName}${id}`}>
                <a>{name}</a>
              </PrefixedLink>
            </li>
          )
        })}
      </ul>
    </WrapLayout>
  )
}

export default Index
