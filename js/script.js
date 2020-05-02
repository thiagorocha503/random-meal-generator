var API_KEY = "1";
var URL_RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/" + API_KEY + "/random.php";
function onGetMeal() {
    var xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", URL_RANDOM_MEAL, true);
    xmlReq.addEventListener("load", function (ev) {
        if (this.readyState == 4) {
            if (this.status >= 200 && this.status < 300) {
                console.log("> " + JSON.parse(this.responseText)["meals"][0]);
                render((JSON.parse(this.responseText))["meals"][0]);
            }
            else {
                console.log("Erro " + this.status + ": ");
                alert("Erro: " + this.responseText);
            }
        }
    });
    xmlReq.addEventListener("error", function (ev) {
        alert("Error");
        console.log("load error");
    });
    xmlReq.send();
}
function render(meal) {
    var app_container = document.getElementById("app-container");
    var old_meal = document.getElementById("meal-container");
    var new_meal = createMeal(meal);
    app_container.replaceChild(new_meal, old_meal);
}
function createMeal(meal) {
    var mealContainer = document.createElement("div");
    mealContainer.setAttribute("id", "meal-container");
    var ingredients = [];
    var directions = [];
    // Ingredients
    for (var i = 1; i <= 20; i++) {
        if (meal["strMeasure" + i] == "" || meal["strMeasure" + i] == null || meal["strMeasure" + i] == " ") {
            continue;
        }
        ingredients.push(meal["strIngredient" + i] + " - " + meal["strMeasure" + i]);
    }
    // Directions
    var steps = meal["strInstructions"].split("\r\n");
    steps.forEach(function (element) {
        if (element != "") {
            directions.push(element);
        }
    });
    var mealContentHtml = "\n        <div class=\"row\">\n            <h2>" + meal["strMeal"] + "</h2>\n        </div>\n        <div class=\"row\" >\n            <image id=\"meal-image\" src=\"" + meal["strMealThumb"] + "\" />\n        </div>\n        <div class=\"row\">\n            <h3>Ingredients</h3>\n            <ul>\n                " + ingredients.map(function (e) { return ("<li>" + e + "</li>"); }).join("") + "\n            </ul>\n        </div>\n        <div class=\"row\">\n            <h3>Directions</h3>\n            <ol>\n                " + directions.map(function (e) { return ("<li>" + e + "</li>"); }).join("") + "\n            </ol>            \n        </div>\n        <div class=\"row\">\n            <h3>Video</h3>        \n            <div class='embed-container'>\n               <iframe src=" + ("https://www.youtube.com/embed/" + meal["strYoutube"].slice(32)) + " frameborder='0' allowfullscreen></iframe>\n            </div>\n        </div>\n    \n    ";
    mealContainer.insertAdjacentHTML("beforeend", mealContentHtml);
    return mealContainer;
}
/*
{
  "meals": [
    {
      "idMeal": "52813",
      "strMeal": "Kentucky Fried Chicken",
      "strDrinkAlternate": null,
      "strCategory": "Chicken",
      "strArea": "American",
      "strInstructions": "Preheat fryer to 350°F. Thoroughly mix together all the spice mix ingredients.\r\nCombine spice mix with flour, brown sugar and salt.\r\nDip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces.\r\nLet chicken pieces rest for 5 minutes so crust has a chance to dry a bit.\r\nFry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F.\r\nLet chicken drain on a few paper towels when it comes out of the fryer. Serve hot.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
      "strTags": "Meat,Spicy",
      "strYoutube": "https://www.youtube.com/watch?v=PTUxCvCz8Bc",
      "strIngredient1": "Chicken",
      "strIngredient2": "Oil",
      "strIngredient3": "Egg White",
      "strIngredient4": "Flour",
      "strIngredient5": "Brown Sugar",
      "strIngredient6": "Salt",
      "strIngredient7": "paprika",
      "strIngredient8": "onion salt",
      "strIngredient9": "chili powder",
      "strIngredient10": "black pepper",
      "strIngredient11": "celery salt",
      "strIngredient12": "sage",
      "strIngredient13": "garlic powder",
      "strIngredient14": "allspice",
      "strIngredient15": "oregano",
      "strIngredient16": "basil",
      "strIngredient17": "marjoram",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "1 whole",
      "strMeasure2": "2 quarts neutral frying",
      "strMeasure3": "1",
      "strMeasure4": "1 1/2 cups ",
      "strMeasure5": "1 tablespoon",
      "strMeasure6": "1 tablespoon",
      "strMeasure7": "1 tablespoon",
      "strMeasure8": "2 teaspoons",
      "strMeasure9": "1 teaspoon",
      "strMeasure10": "1 teaspoon",
      "strMeasure11": "1/2 teaspoon",
      "strMeasure12": "1/2 teaspoon",
      "strMeasure13": "1/2 teaspoon",
      "strMeasure14": "1/2 teaspoon",
      "strMeasure15": "1/2 teaspoon",
      "strMeasure16": "1/2 teaspoon",
      "strMeasure17": "1/2 teaspoon",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "http://www.tablespoon.com/recipes/copycat-kfc-original-style-chicken/97c93d14-9d8c-4bc7-96dc-1e0b37e4fcaa",
      "dateModified": null
    }
  ]
}

*/ 
