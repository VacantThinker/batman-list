import Link from "next/link";
import React from "react";
import getConfig from 'next/config';

const{ publicRuntimeConfig} = getConfig();
const linkPrefix = publicRuntimeConfig.linkPrefix;

const PrefixedLink = ({href, as = href, children}) => {
  return (
    <Link href={href} as={`${linkPrefix}${as}`}>
      {children}
    </Link>
  )
}
export default PrefixedLink;
