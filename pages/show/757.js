import WrapLayout from '../../components/WrapLayout'
import PrefixedImg from '../../components/PrefixedImg'
import React from 'react'

const Post757 = props => {
  //  const { id, name, summary } = props

  return (
    <WrapLayout>
      <h1>Batman: The Animated Series</h1>
      <p>
        <p>
          Experience the thrills of vigilante justice as millionaire playboy
          Bruce Wayne and alter-ego Batman protect the streets of Gotham City
          from a host of villains including archnemesis The Joker,
          deadly-beautiful Poison Ivy and primitive Killer Croc in a fresh take
          on super hero storytelling. Intelligent, dramatic stories, unique
          characters and sharp dialog shaped this edgy TV series into an
          Emmy®-winning powerhouse that brought the Caped Crusader out of the
          dark alleys of TV history and into the present for fans of all ages.
        </p>
      </p>
      <PrefixedImg alt="" src={`/static/757.jpg`} />
    </WrapLayout>
  )
}

export default Post757
