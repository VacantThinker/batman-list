import Link from 'next/link'
import React from 'react'

const PrefixedLink = ({ href, as = href, children }) => (
  <Link href={href} as={`${process.env.prefixLink}${as}`}>
    {children}
  </Link>
)

export default PrefixedLink
