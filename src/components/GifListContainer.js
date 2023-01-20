import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
  const [gifs, setGifs]=useState([])
  // I set my starter gif as  dolphin
  const [find, setFind]=useState('dolphin')

  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${find}&api_key=0cK05ZV1NYwbd4ii50tG5vwBJ2bHBQVd&rating=g`)
    .then(res=>res.json())
    .then(data=>{
      let newArr=[]
      for(let i=0; i<3;i++){
        newArr.push(data.data[i].images.original.url)
      }
      setGifs(newArr)
    })
  }, [find])

  function handleSubmit(data){
    setFind(data)
  }
  console.log(find)

  return (
    <div style={{
      display:'flex', alignItems:"start", justifyContent:"space-between"}}>
      <GifList gifs={gifs}/>
      <GifSearch onSubmit={handleSubmit}/>
    </div>
  )
}

export default GifListContainer