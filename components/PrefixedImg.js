import React from 'react'

const PrefixedImg = ({ alt = '', src }) => (
  <img alt={`${alt}`} src={`${process.env.linkPrefix}${src}`}/>
)

export default PrefixedImg
