import React, { useEffect, useState } from 'react'
// import PaginationComponent from '../../components/Pagination';
import Pagination from "react-js-pagination";
import { getAllCharacters } from '../../utils/apiService';
import '../../components/Pagination.css'
import CharacterCard from './CharacterCard';
import CharacterProfile from './CharacterProfile';
import { useModal } from '../../utils/useModal';

const CharactersList = () => {
  const [charactersList,setCharactersList] = useState([]);
  const [activePage,setActivePage] = useState(1)
  const [selectedCharacter,setSelectedCharacter] = useState({})
  const {isOpen, openModal, closeModal} = useModal()
  
  //Loads first page on initial render
  useEffect(() => {
    const initializeCharacters = async () =>{
      const response = await getAllCharacters(`page=1`);
      setCharactersList(await response.results)
      setSelectedCharacter(response.results[0])
    }
    initializeCharacters()
  }, [])

//Loads character for the current page
  const loadCharacters = async (activePage) =>{
    const response = await getAllCharacters(`page=${activePage}`);
    setCharactersList(await response.results)
    setActivePage(activePage)
  }

//Handles page changes, pageNumber calculated by the pagination library
  const paginationHandler = (pageNumber) => {
    loadCharacters(pageNumber)
  }

  const handleCardClick = (character) => {
    setSelectedCharacter(character)
    openModal()
    console.log(closeModal)
  }

  return (
    <div>
      <section className="mx-4 my-8 flex flex-wrap gap-8">
        {charactersList.map((character) => {
          return (
            <div 
              key={character?.id}
              onClick={()=>handleCardClick(character)}>
              <CharacterCard
                imageUrl={character?.image}
                name={character?.name}
              />
            </div>
          );
        })}
      </section>
        {/* pass id to profile, call relevant apis, get data. */}
      {/* create modal, call character profile into it */}
   {  isOpen===true? <CharacterProfile character={selectedCharacter} closeModal={closeModal}/> :<></>}
      <Pagination
        onChange={paginationHandler} //automatically passes relevant pageNumber
        activePage={activePage}
        innerClass={"pagination-wrapper"}
        itemClass={"pagination-items"}
        activeClass={"pagination-active"}
        hideDisabled={true}
        itemsCountPerPage={20}
        totalItemsCount={827} // hardcoded value from api
        pageRangeDisplayed={5}
      />
    </div>
  );
}

export default CharactersList