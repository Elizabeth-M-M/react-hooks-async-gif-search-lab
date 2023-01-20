import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul>
      {gifs.map((gif, ind)=><li key={ind}><img src={gif}/></li>)}
    </ul>
  )
}

export default GifList