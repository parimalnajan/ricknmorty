import React, { useEffect, useState } from 'react'
import { getCharacterSpecificData } from '../../utils/apiService'

const CharacterProfile = ({character,closeModal}) => {

  const {name,image,gender,species,type,origin,location,episode} = character
  const [extraData,setExtraData] = useState({originData:{},locationData:{},episodesData:[]})

  useEffect(() => {

    (async () => {  // eslint-disable-line no-unexpected-multiline  
      const char = await  getCharacterSpecificData(origin.url,location.url,episode)
    

      setExtraData(char)
    })();
  }, [])
  
  const {originData,locationData,episodesData} =  extraData


  console.log(originData,locationData,episodesData)
  return (<>
    <section className='absolute top-0 left-0 bg-gray-50 border-2 rounded-lg shadow-lg w-3/4 min-h-3/4 max-h-fit m-24 p-4  z-20'>
      <button onClick={closeModal} className='float-right px-2 border border-gray-400 rounded-lg'> X </button>

      <div className="flex flex-wrap gap-8 ">
        <div className='pl-8 p-4 flex-1 border-2 rounded-md min-w-max'>
          <h4 className="font-semibold text-xl text-gray-600 mb-6 ">Biography </h4>
          <img src={image} alt="" className='h-32 w-32 rounded-full mt-4 mb-8' />
          <span>Name: </span><span>{name}</span>
          <div> <span>Species: </span><span> {species}</span></div>
          <div> <span>Type: </span><span> {type}</span></div>
          <div> <span>Gender: </span><span> {gender}</span></div>
        </div>
        <div className='flex-1 border-2 rounded-md p-4 min-w-fit'>
          <h4 className="font-semibold text-xl text-gray-600  ">Location</h4>
          <span>Name: </span><span>{locationData.name}</span>
          <div> <span>Type: </span><span> {locationData.type}</span></div>
          <div> <span>Dimension: </span><span> {locationData.dimension}</span></div>
          <div> <span>Population: </span><span> {locationData?.residents?.length}</span></div>

          <h4 className="font-semibold text-xl text-gray-600 mt-8">Origin</h4>
          <span>Name: </span><span>{originData.name}</span>
          <div> <span>Type: </span><span> {originData.type}</span></div>
          <div> <span>Population: </span><span> {originData?.residents?.length}</span></div>
          <div> <span>Dimension: </span><span> {originData.dimension}</span></div>

        </div>
        <div className='flex-1 p-4'> 
        <h4 className="font-semibold text-xl text-gray-600 mb-4 ">Appearances </h4>
        <div className='overflow-auto max-h-96 min-h-fit w-80 border-2 rounded-md p-2'>
          {
            episodesData.map((episode)=>{
              return (
                <div className="my-2 py-2 border-b-2"
                key={episode.id}>
                  <span>{episode.episode} - </span>
                  <span>{episode.name}</span>
                </div>)
            })
          }
          </div>
        </div>
      </div>
  
    </section >
    {/* //backdrop for modal */}
      <div 
      onClick={closeModal}
      className='bg-gray-800 opacity-70 w-screen h-screen fixed top-0 left-0 z-10'></div>   
      </>
  )
}

export default CharacterProfile