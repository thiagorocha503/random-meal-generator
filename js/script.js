// Write JavaScript here
var API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
function onSend() {
    getMeal();
}
function getMeal() {
    var xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", API_URL, true);
    xmlReq.addEventListener("load", function (ev) {
        if (this.readyState == 4) {
            if (this.status >= 200 && this.status < 300) {
                console.log("> " + JSON.parse(this.responseText)["meals"][0]);
                render((JSON.parse(this.responseText))["meals"][0]);
            }
            else {
                alert("Erro: " + this.responseText);
            }
        }
    });
    xmlReq.addEventListener("error", function (ev) {
        alert("Error");
    });
    xmlReq.send();
}
function render(data) {
    var app_container = document.getElementById("app-container");
    var old_meal = document.getElementById("meal");
    var new_meal = createMeal(data);
    app_container.replaceChild(new_meal, old_meal);
}
function createMeal(datas) {
    var mealContainer = document.createElement("div");
    mealContainer.setAttribute("id", "meal");
    var ingredients = "<ul>";
    for (var i = 1; i <= 20; i++) {
        // console.log(">> "+datas[`strMeasure${i}`]);
        if (datas["strMeasure" + i] == "" || datas["strMeasure" + i] == null || datas["strMeasure" + i] == " ") {
            continue;
        }
        ingredients += "<li>" + datas["strIngredient" + i] + " - " + datas["strMeasure" + i] + "</li>\n";
    }
    ingredients += "</ul>";
    var modoPrepraro = "<ol>";
    var steps = datas["strInstructions"].split("\r\n");
    steps.forEach(function (e) {
        if (e != "") {
            modoPrepraro += "<li>" + e + "</li>";
        }
    });
    modoPrepraro += "</ol>";
    var mealContentHtml = "\n        <div>\n            <h1>" + datas["strMeal"] + "</h1>\n        </div>\n        <div id=\"image-container\">\n            <image src=\"" + datas["strMealThumb"] + "\" />\n        </div>\n        <div>\n            <h3>Ingredients</h3>\n            " + ingredients + "\n           \n        </div>\n        <div>\n            <h3>Directions</h3>\n            " + modoPrepraro + "\n        </div>\n        <div>\n            <h3>video</h3>\n            <iframe  src=" + ("https://www.youtube.com/embed/" + datas["strYoutube"].slice(32)) + "></iframe>\n        </div>\n    \n    ";
    mealContainer.insertAdjacentHTML("beforeend", mealContentHtml);
    return mealContainer;
}
/*

<div id="app-container">
        <div>
            <h1>Receita título</h1>
        </div>
        <div id="image-container">
            <image src="https://img.itdg.com.br/tdg/images/recipes/000/001/634/50999/50999_original.jpg?mode=crop&width=710&height=400" />
            <div style="text-align:right; padding:0;">
                <span>Receita image</span>
            </div>
        </div>
        <div>
            <ul>
                <li>A - nivel</li>
                <li>B - ####</li>
                <li>C - ####</li>
            </ul>
        </div>
        <div>
            <h3>Ingredientes</h3>
            <ul>
                <li>Ingrediente 01 </li>
                <li>Ingrediente 02 </li>
                <li>Ingrediente 03 </li>
                <li>Ingrediente 05 </li>
                <li>Ingrediente 06 </li>
            </ul>
        </div>
        <div>
            <h3>Modo de preparo</h3>
            <ol>
                <li>step </li>
                <li>step </li>
                <li>step </li>
                <li>step </li>
                <li>step </li>
            </ol>
        </div>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TcwEUkntHHU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </div>

*/
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
