const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef5be341d6mshd73c5cbc3d983c1p1dc9cdjsn5119a559ea5c',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}   
};

const fetchRecipes = () => {
    fetch(url, options)
        .then(response => response.json())
        .then(response =>{
            console.log(response);
            let recipes = response.d;
            let imgContainer = document.querySelector('#imgContainer');
            for (let i = 0; i < 9; i++) {
                let html = `
                    <li><a href="" ><img src="${recipes[i].Image}" alt=""></a></li>
                `;
                imgContainer.insertAdjacentHTML('beforeend',html);
            }
            let popularContainer = document.querySelector('#popularContainer');
            for(let i = 9; i<14; i++) {
                let html = `
                    <li>
                        <a href="/recipe.html"><img src="${recipes[i].Image}" alt=""></a>
                    </li>
                `;
                popularContainer.insertAdjacentHTML('beforeend',html);
            }
            let recientesContainer = document.querySelector('#recientesContainer');
            for(let i = 14; i<24; i++){
                let html = `
                    <li class="item-container">
                        <div class="content-container">
                            <a href="">
                                <img src="${recipes[i].Image}" alt="">
                                <h3>${recipes[i].Title}</h3>
                        </a>
                        </div>
                    </li>
                `;
                recientesContainer.insertAdjacentHTML('beforeend',html);
            }
        })
        .catch(err => console.error(err));

};

console.log('Llamada a la api');
fetchRecipes();

