const url = "http://localhost:3000/fruitData";
// data in db.json is originally from https://www.fruityvice.com/api/fruit/all
const fruitCardContainer = document.querySelector("div#fruitCardContainer");

window.addEventListener("DOMContentLoaded", () => {
  //GET FRUIT DATA
  fetch(url)
  .then(res => res.json())
  .then(fruitData => {
    console.log("FRUIT DATA", fruitData);
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
  let genusOption = document.createElement("a");
  let familyOption = document.createElement("a");
  let orderOption = document.createElement("a");
  //FIND UNIQUE FILTER VALUES
  let fruitInfo = {genus: {}, family: {}, order: {}};
    //populate fruitInfo
    // fruit.
    console.log("FRUIT INFO", fruitInfo.genus);

  //RENDER FILTER DROP DOWNLIST
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
  //Fruit Image
  const fruitImg = document.createElement("img");
    fruitImg.className = "fruitImg";
    fruitImg.src = `./images/${fruit.name}.png`;
    fruitCard.append(fruitImg);
  //Fruit Nutrition
  const nutrition = document.createElement("div");
    //Calories, Carbohydrates, Sugar, Protein, & Fats
    nutrition.innerHTML = `
      <b>Nutrition</b><br>
      Calories: ${fruit.nutritions.calories}<br>
      Fats: ${fruit.nutritions.fat}<br>
      Carbohydrates: ${fruit.nutritions.carbohydrates}<br>
      Sugar: ${fruit.nutritions.sugar}<br>
      Protein: ${fruit.nutritions.protein}<br>
    `;
    fruitCard.append(nutrition);

  //Like/Delete Fruit
  const likeDelete = document.createElement("div");
    likeDelete.id = "likeDeleteBar";
    //like icon
    const likeIcon = document.createElement("div");
      likeIcon.className = "likeDeleteIcons";
      likeIcon.textContent = "♡"; // ♥
    //delete icon
    const deleteIcon = document.createElement("div");
      deleteIcon.className = "likeDeleteIcons";
      deleteIcon.textContent = "✖";
    //event listeners
    likeIcon.addEventListener("click", () => {
      fruitCard.style.borderColor = "#f27649";
      fruitCard.style.borderWidth = "5px";
    });

    deleteIcon.addEventListener("click", () => {
      fruitCard.remove();
    });
    
    likeDelete.append(likeIcon, deleteIcon);
  fruitCard.append(likeDelete);
  
  //put fruitCard into container
  fruitCardContainer.append(fruitCard);
};