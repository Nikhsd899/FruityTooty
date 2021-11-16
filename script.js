const url = "http://localhost:3000/fruitData";
// data in db.json is originally from https://www.fruityvice.com/api/fruit/all
const fruitCardContainer = document.querySelector("div#fruitCardContainer");

window.addEventListener("DOMContentLoaded", () => {
  //GET FRUIT DATA
  fetch(url)
  .then(res => res.json())
  .then(fruitData => {
    // console.log("FRUIT DATA", fruitData);
    fruitData.forEach(fruit => { //fruit is the fruit obj with name, genus, nutrition, etc.
      renderFilterBar(fruit);
      renderFruitCards(fruit);
    })
  })
  .catch(error => {
    console.log("ERROR", error);
  });
})

function renderFilterBar(fruit) {
  const genus = document.querySelector("div#genusFilter");
  const family = document.querySelector("div#familyFilter");
  const order = document.querySelector("div#orderFilter");
  //render Genus filter
  let genusOption = document.createElement("a");
    
  //render Family filter

  //render Order filter
};

function renderFruitCards(fruit) {
  const fruitCardContainer = document.querySelector("div#fruitCardContainer");
  //One fruit Card
  const fruitCard = document.createElement("div");
    fruitCard.id = "fruitCard";
  //Fruit Name
  const fruitName = document.createElement("h2");
    fruitName.textContent = fruit.name;
    fruitCard.append(fruitName);
  //Fruit Nutrition
  const nutrition = document.createElement("div");
    //Calories, Carbohydrates, Sugar, Protein, & Fats
    nutrition.innerHTML = `
      <b>Nutrition</b><br>
      Calories: ${fruit.nutritions.calories}<br>
      Carbohydrates: ${fruit.nutritions.carbohydrates}<br>
      Sugar: ${fruit.nutritions.sugar}<br>
      Protein: ${fruit.nutritions.protein}<br>
      Fats: ${fruit.nutritions.fat}<br>
    `;
    fruitCard.append(nutrition);

  //Like/Delete Fruit
    //created heart icon

      //add event listener
      // heartIconName.addEventListener("click", (event) => {
      //   event.preventDefault();
      //   //thing to do when heart icon is clicked.
        
      // });




    //append to 
    // fruitCard.append();

  //end
  fruitCardContainer.append(fruitCard);
};