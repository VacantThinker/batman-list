import React from 'react'

const PrefixedImg = ({ alt = '', src }) => (
  <img alt={`${alt}`} src={`${process.env.prefixLink}${src}`}/>
)

export default PrefixedImg
