
export const getAllCharacters = async (pageNumber) =>{
        const domain="https://rickandmortyapi.com/api/character?";
        const response = await fetch(domain+pageNumber);
        const json = await response.json();
        return json
}


export const getCharacterSpecificData = async (originUrl,locationUrl,episodesArray) => {
	console.log(originUrl,locationUrl,episodesArray)

	// const response = await fetch(episodesArray[1]);

	const originPromise =  fetch(originUrl).then(res=>res.json())
	console.log(originPromise)
	// const originData = await originPromise.json();

	const locationPromise =  fetch(locationUrl).then(res=>res.json())
	console.log(locationPromise)

	// const locationData = await locationResponse.json();

	// console.log(originData,locationData)

	const requestsArray = [locationPromise,originPromise]

	let results = await Promise.all([requestsArray])
	console.log(results)

	// Promise.all(requestsArray)
    // .then((results) =>{
	// 	console.log(results)
	// 	responseArray = results.map((x)=>{
	// 		x.json().then((data)=> console.log(data))
	// 	})
	// 	console.log(responseArray)
	// })
    // .catch((err) => console.log(err))
	
	// Promise.all(episodesArray.map((request) => {
	// 	return fetch(request).then((response) => {
	// 		return response.json();
	// 	}).then((data) => {
	// 		return data;
	// 	});
	// })).then((values) => {
	// 	console.log('values', values);
	// }).catch(console.error.bind(console));
}