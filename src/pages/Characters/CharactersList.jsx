import React from 'react'

const CharactersList = () => {
  const times = 5 
  const iLikeLogs = () =>{
    for(let i=0; i< times; i++)

    console.log("logdis"+i);
  }

  iLikeLogs();
  return (
    <div>CharactersList</div>
  )
}

export default CharactersList