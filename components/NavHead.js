import React from 'react'
import Link from "./Link";

const NavHead = () => {
  return (
    <div>
      <Link href={`/`}><a>Home</a></Link>
      <Link href={`/about`}><a>about</a></Link>
      <style jsx>{`
      a { 
        margin-left: 5px;
        margin-right: 10px; 
      }
      `}</style>
    </div>
  )
}

export default NavHead;
