document.addEventListener("DOMContentLoaded", function () {
    // Aquí realizarías una solicitud a tu API para obtener datos de la receta y llenar la página.
    // Puedes usar Fetch API para esto.

    // Ejemplo de solicitud a una API (reemplaza con tu URL):
    fetch("https://tu-api-de-recetas.com/receta/1")
        .then((response) => response.json())
        .then((data) => {
            const recipeImage = document.querySelector(".recipe-image img");
            const recipeDescription = document.querySelector(".recipe-description p");
            const ingredientsList = document.querySelector(".recipe-ingredients ul");
            const instructionsList = document.querySelector(".recipe-instructions ol");

            // Rellena los elementos HTML con los datos de la API.
            recipeImage.src = data.image_url;
            recipeDescription.textContent = data.description;
            data.ingredients.forEach((ingredient) => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
            data.instructions.forEach((instruction) => {
                const li = document.createElement("li");
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });
        })
        .catch((error) => {
            console.error("Error al cargar la receta: " + error);
        });
});