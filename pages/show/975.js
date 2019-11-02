import WrapLayout from '../../components/WrapLayout'
import PrefixedImg from '../../components/PrefixedImg'
import React from 'react'

const Post975 = props => {
  //  const { id, name, summary } = props

  return (
    <WrapLayout>
      <h1>Batman</h1>
      <p>
        <p>
          Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a
          double life: they are actually crime fighting duo Batman and Robin. A
          secret Batpole in the Wayne mansion leads to the Batcave, where Police
          Commissioner Gordon often calls with the latest emergency threatening
          Gotham City. Racing to the scene of the crime in the Batmobile, Batman
          and Robin must (with the help of their trusty Bat-utility-belt) thwart
          the efforts of a variety of master criminals, including Catwoman,
          Egghead, The Joker, King Tut, The Penguin, and The Riddler.
        </p>
      </p>
      <PrefixedImg alt="" src={`/static/975.jpg`} />
    </WrapLayout>
  )
}

export default Post975
