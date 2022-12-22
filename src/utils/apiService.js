export const getAllCharacters = async (pageNumber) => {
  const domain = "https://rickandmortyapi.com/api/character?";
  const response = await fetch(domain + pageNumber);
  const json = await response.json();
  return json;
};

export const queryByUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getCharacterSpecificData = async (originUrl,locationUrl,episodesArray) => {

  console.log(locationUrl, episodesArray[1]);
  let characterData = {};   //object to be returned

    //Checking and handling empty reponses
  if (originUrl !== "") {
    const originData = await queryByUrl(originUrl);
    characterData =  { ...characterData, originData };
  } else {
    characterData =  { ...characterData, originData: "unknown" };
  }

  if (locationUrl !== "") {
    const locationData = await queryByUrl(locationUrl);
    characterData = { ...characterData, locationData };
  } else {
    characterData = { ...characterData, locationData: "unknown" };
  }

// Next block does a parallel fetch for all episodes
    // Tried but did not include the locations api calls with this as it was failing in some cases, causing the entire operation to fail.
  let episodesPromiseArray = episodesArray.map((episodeUrl) => {
    return fetch(episodeUrl);
  });

  let episodesResponseArray = await Promise.all(episodesPromiseArray); //returns array of responses
  let episodesData = await Promise.all(     //call .json() on each response
    episodesResponseArray.map((res) => {
      return res.json();
    })
  );
   characterData =  { ...characterData, episodesData }; // add episodes to be reurned

   return characterData;


  // TODO: try without async syntax -

  // Promise.all(episodesArray.map((request) => {
  // 	return fetch(request).then((response) => {
  // 		return response.json();
  // 	}).then((data) => {
  // 		return data;
  // 	});
  // })).then((values) => {
  // 	console.log('values', values);
  // }).catch(console.error.bind(console));
};
