	//Getting the DOM-elements with ID
const inputEL=document.querySelector('input');
const formEl=document.querySelector('form')


	//Variables I need for now
let numberDogs=0;
let dogPicture=""
const allDogs=[];

formEl.addEventListener('submit', async e=>{
	e.preventDefault()
	numberDogs=Number(inputEL.value);
	console.log(numberDogs);
	try{

		//console.log(dogPictures);
		
		//console.log(dogPictures)
		for(let i=0; i<numberDogs; i++){
			dogPicture = await getData()
				const isSameImage=allDogs.find(x=>x.message===dogPicture.message)
				if(!isSameImage){
					allDogs.push(dogPicture);
			}

		}
		console.log('Here are all the dogs you wanted to see',allDogs)

		
	}catch{}
})




