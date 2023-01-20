import React, {useState} from 'react'

const GifSearch = ({onSubmit}) => {
  const [search, setSearch]=useState('')
  function handleChange(event){
    setSearch(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    onSubmit(search)
  }

  return (
    <div>
      <p>Enter a search Term:</p>
      <form onSubmit={handleSubmit} >
        <input type="text" value={search} onChange={handleChange} />
        <button style={{
          backgroundColor:"green", color:"white"}} type='submit'>Find Gifs</button>
      </form>
    </div>
  )
}

export default GifSearch