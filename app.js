	//Getting the DOM-elements with ID
const inputEL=document.querySelector('input');
const formEl=document.querySelector('form')
const showDogsEl=document.querySelector('#showDogs')
const startContentEl=document.querySelector('#startContent')
const getMoreTopEl=document.querySelector('#getMoreTop')
const getMoreBottomEl=document.querySelector('#getMoreBottom')


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

		hideDom(startContentEl)
		renderImages()
		showDom(showDogsEl)
		showDom(getMoreBottomEl)
		showDom(getMoreTopEl)

		
	}catch(err){
		console.log('Something is not right',err)
		throw err;

	}
})
getMoreTopEl.addEventListener('click', e => {
	showMorePictures()

})

getMoreBottomEl.addEventListener('click', e => {
	showMorePictures()

})


function renderImages (){

	showDogsEl.innerHTML=allDogs.map(image=>{
		return `<div class="container text-center my-5"> 
		<img class="img-fluid" src="${image.message}" alt="dogImage" ">
		</div>`
	}).join("")
}

function showDom(element){
	element.classList.remove('hide')
}
function hideDom(element){
	element.classList.add('hide')
}
function showMorePictures() {
	showDom(startContentEl)
	hideDom(getMoreBottomEl)
	hideDom(getMoreTopEl)
	hideDom(showDogsEl)
	allDogs.splice(0,allDogs.length)
	numberDogs=0;
	inputEL.value=""

}


