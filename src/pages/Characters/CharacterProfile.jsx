import React from 'react'
import { getCharacterSpecificData } from '../../utils/apiService'

const CharacterProfile = ({character,closeModal}) => {
  const {name,image,gender,episodes,locations,species,type,origin,location,episode} = character
  console.log(character)

  const characterDetails = getCharacterSpecificData(origin.url,location.url,episode)

  console.log(characterDetails)
  return (
    <section className='fixed top-0 left-0 bg-gray-50 border-2 rounded-lg shadow-lg w-3/4 h-3/4 m-24 p-4 pl-8'>
      <button onClick={closeModal} className='float-right px-2 border border-gray-400 rounded-lg'> X </button>
      <img src={image} alt="" className='h-32 w-32 rounded-full mt-4' />
      <span>Name</span><span>  {name}</span>
      <div> <span>Species</span><span> {species}</span></div>
      <div> <span>Gender</span><span> {gender}</span></div>
      <div> <span>type</span><span> {type}</span></div>
      {episodes}
      {locations}
    </section >
  )
}

export default CharacterProfile