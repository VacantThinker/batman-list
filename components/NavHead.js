import React from 'react'
import PrefixedLink from './PrefixedLink'

const aStyle = {
  marginRight: 10
}

const NavHead = () => {
  const linkDataArr = [
    { linkUrl: '/', linkName: 'home' },
    { linkUrl: '/about', linkName: 'about' }
  ]
  return (
    <div>
      {linkDataArr.map(data => (
        <PrefixedLink key={data.linkName} href={data.linkUrl}>
          <a style={aStyle}>{data.linkName}</a>
        </PrefixedLink>
      ))}
    </div>
  )
}

export default NavHead
