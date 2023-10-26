const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef5be341d6mshd73c5cbc3d983c1p1dc9cdjsn5119a559ea5c',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}   
};

async function ok () {
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

 ok()