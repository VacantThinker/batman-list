import Link from 'next/link'
import React from 'react'
// import getConfig from "next/config";
//
// const { publicRuntimeConfig } = getConfig();
// const linkPrefix = publicRuntimeConfig.linkPrefix;
//
// const PrefixedLink = ({ href, as = href, children }) => (
//   <Link href={href} as={`${linkPrefix}${as}`}>
//     {children}
//   </Link>
// );

const PrefixedLink = ({ href, as = href, children }) => (
  <Link href={href} as={`${process.env.linkPrefix}${as}`}>
    {children}
  </Link>
)

export default PrefixedLink
