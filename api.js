//Getting the API from a open API-Server
const getData = async () =>{

	try{
		const response = await fetch("https://dog.ceo/api/breed/hound/images/random")
		if(!response){
			throw new Error('The API is now avalible')
		}
		const data = await response.json()
		console.log(data)
	} catch(err){
		alert('Something went wrong with the data')

	}
}
getData()