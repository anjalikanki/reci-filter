//const searchBtn = document.getElementById('search-btn');
//const mealList = document.getElementById('meal');
//const mealDetailsContent = document.querySelector('.meal-details-content');
//const recipeCloseBtn = document.getElementById('recipe-close-btn');
//
//searchBtn.addEventListener('click', getMealList);
//mealList.addEventListener('click', getMealRecipe);
//recipeCloseBtn.addEventListener('click', () => {
//    mealDetailsContent.parentElement.classList.remove('showRecipe');
//});
//
//// get meal list that matches with the ingredients
//function getMealList(){
//    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
//    .then(response => response.json())
//    .then(data => {
//        let html = "";
//        if(data.meals){
//            data.meals.forEach(meal => {
//                html += `
//                    <div class = "meal-item" data-id = "${meal.idMeal}">
//                        <div class = "meal-img">
//                            <img src = "${meal.strMealThumb}" alt = "food">
//                        </div>
//                        <div class = "meal-name">
//                            <h3>${meal.strMeal}</h3>
//                            <a href = "#" class = "recipe-btn">Get Recipe</a>
//                        </div>
//                    </div>
//                `;
//            });
//            mealList.classList.remove('notFound');
//        } else{
//            html = "Sorry, we didn't find any meal!";
//            mealList.classList.add('notFound');
//        }
//
//        mealList.innerHTML = html;
//    });
//}
//
//
//// get recipe of the meal
//function getMealRecipe(e){
//    e.preventDefault();
//    if(e.target.classList.contains('recipe-btn')){
//        let mealItem = e.target.parentElement.parentElement;
//        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//        .then(response => response.json())
//        .then(data => mealRecipeModal(data.meals));
//    }
//}
//
//// create a modal
//function mealRecipeModal(meal){
//    console.log(meal);
//    meal = meal[0];
//    let html = `
//        <h2 class = "recipe-title">${meal.strMeal}</h2>
//        <p class = "recipe-category">${meal.strCategory}</p>
//        <div class = "recipe-instruct">
//            <h3>Instructions:</h3>
//            <p>${meal.strInstructions}</p>
//        </div>
//        <div class = "recipe-meal-img">
//            <img src = "${meal.strMealThumb}" alt = "">
//        </div>
//        <div class = "recipe-link">
//            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
//        </div>
//    `;
//    mealDetailsContent.innerHTML = html;
//    mealDetailsContent.parentElement.classList.add('showRecipe');
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes();
})

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <ul>
                ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div>
        `
    })
    resultsList.innerHTML = html;
}

const imageUrls = [
  'image1.jpeg',
  'image2.jpeg',
  'image3.jpeg',
  'image4.jpeg',
  'image5.jpeg',
  'image6.jpeg',
  'image7.jpeg',
  'image8.jpeg',
  'image9.jpeg',
  'image9.jpeg',
  'image10.jpeg',
  'image11.jpeg',
  'image12.jpeg',
  'image14.jpeg',
  'image15.jpeg',
  'image16.jpeg',
];

let currentImageIndex = 0;
const carouselImage = document.getElementById('carouselImage');

const delayedChange = (imageUrl, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      carouselImage.src = imageUrl;
      resolve();
    }, delay);
  });
};

async function carousel() {
    while (true){
      await delayedChange(imageUrls[0], 1500);
      await delayedChange(imageUrls[1], 1500);
      await delayedChange(imageUrls[2], 1500);
      await delayedChange(imageUrls[3], 1500);
      await delayedChange(imageUrls[4], 1500);
      await delayedChange(imageUrls[5], 1500);
      await delayedChange(imageUrls[6], 1500);
      await delayedChange(imageUrls[7], 1500);
      await delayedChange(imageUrls[8], 1500);
      await delayedChange(imageUrls[9], 1500);
      await delayedChange(imageUrls[10], 1500);
      await delayedChange(imageUrls[11], 1500);
      await delayedChange(imageUrls[12], 1500);
      await delayedChange(imageUrls[13], 1500);
      await delayedChange(imageUrls[14], 1500);
      await delayedChange(imageUrls[15], 1500);

}
}

carousel();

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes();
})

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=5e3958ce&app_key=%20d7da18321952c63d15e87c31e77f10cb%09`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <ul>
                ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div>
        `
    })
    resultsList.innerHTML = html;
}