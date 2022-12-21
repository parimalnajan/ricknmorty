import React from 'react'

const CharacterCard = (props) => {
    const {imageUrl,name} = props


  return (
    <div className='border-2 shadow-md rounded-md p-4 w-40 flex flex-col justify-center gap-4 items-center'>
        <img src={imageUrl} alt="" className='h-16 w-16 rounded-full' />
        <div className='text-gray-600 '>
            <span className='font-semibold'> {name}</span>
        </div>
    </div>
  )
}

export default CharacterCard