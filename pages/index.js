import React from 'react'
import WrapLayout from '../components/WrapLayout'
import PrefixedLink from '../components/PrefixedLink'

const Index = props => {
  // const { shows } = props
  // const dirName = '/show/'
  // const p_id = '[id]'

  return (
    <WrapLayout>
      <h1>batman list</h1>
      <ul>
        <li key={`975`}>
          <PrefixedLink href={`/show/975`} as={`/show/975`}>
            <a>Batman</a>
          </PrefixedLink>
        </li>
        <li key={`481`}>
          <PrefixedLink href={`/show/481`} as={`/show/481`}>
            <a>The Batman</a>
          </PrefixedLink>
        </li>
        <li key={`504`}>
          <PrefixedLink href={`/show/504`} as={`/show/504`}>
            <a>Batman Beyond</a>
          </PrefixedLink>
        </li>
        <li key={`757`}>
          <PrefixedLink href={`/show/757`} as={`/show/757`}>
            <a>Batman: The Animated Series</a>
          </PrefixedLink>
        </li>
        <li key={`3557`}>
          <PrefixedLink href={`/show/3557`} as={`/show/3557`}>
            <a>Beware the Batman</a>
          </PrefixedLink>
        </li>
        <li key={`11464`}>
          <PrefixedLink href={`/show/11464`} as={`/show/11464`}>
            <a>Batman Unlimited</a>
          </PrefixedLink>
        </li>
        <li key={`900`}>
          <PrefixedLink href={`/show/900`} as={`/show/900`}>
            <a>Batman: The Brave and the Bold</a>
          </PrefixedLink>
        </li>
        <li key={`22309`}>
          <PrefixedLink href={`/show/22309`} as={`/show/22309`}>
            <a>Batman: Black and White</a>
          </PrefixedLink>
        </li>
        <li key={`5951`}>
          <PrefixedLink href={`/show/5951`} as={`/show/5951`}>
            <a>The New Batman Adventures</a>
          </PrefixedLink>
        </li>
        <li key={`33618`}>
          <PrefixedLink href={`/show/33618`} as={`/show/33618`}>
            <a>The Adventures of Batman</a>
          </PrefixedLink>
        </li>
      </ul>
    </WrapLayout>
  )
}

export default Index
