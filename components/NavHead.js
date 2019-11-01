import React from 'react'
import PrefixedLink from './PrefixedLink'

const aStyle = {
  marginRight: 10
}

const NavHead = () => {
  return (
    <div>
      <PrefixedLink href="/">
        <a style={aStyle}>Home</a>
      </PrefixedLink>
      <PrefixedLink href="/about">
        <a style={aStyle}>about</a>
      </PrefixedLink>
    </div>
  )
}

export default NavHead
