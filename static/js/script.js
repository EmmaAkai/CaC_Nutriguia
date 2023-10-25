let params = '';
let urlBase = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
let recipeSearch = '/recipes/complexSearch?query=';
let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SING-UP-FOR-KEY',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapid'
    }
}

let url = urlBase + recipeSearch + params;

let response = await fetch(url, options);

if (response.ok) {
    let result = await response.text();
    console.log(result);
}

