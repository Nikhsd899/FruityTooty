const url = "http://localhost:3000/fruitData";
// data in db.json is originally from https://www.fruityvice.com/api/fruit/all
const fruitCardContainer = document.querySelector("div#fruitCardContainer");

window.addEventListener("DOMContentLoaded", () => {
  //GET FRUIT DATA
  fetch(url)
  .then(res => res.json())
  .then(fruitData => {
    const genusDiv = document.querySelector("div#genusFilterOptions");
    const familyDiv = document.querySelector("div#familyFilterOptions");
    const orderDiv = document.querySelector("div#orderFilterOptions");
    let genusList = {};
    let familyList = {};
    let orderList = {};

    fruitData.forEach(fruit => { //fruit is the fruit obj with name, genus, nutrition, etc.
      if (genusList[fruit.genus] === undefined) {
        genusList[fruit.genus] = 0;
      } else {
        genusList[fruit.genus]++;
      }

      if (familyList[fruit.family] === undefined) {
        familyList[fruit.family] = 0;
      } else {
        familyList[fruit.family]++;
      }

      if (orderList[fruit.order] === undefined) {
        orderList[fruit.order] = 0;
      } else {
        orderList[fruit.order]++;
      }

      renderFruitCards(fruit);
    })
    
    Object.keys(genusList).forEach(genus => {
      let div = document.createElement("a");
        div.textContent = genus;
        genusDiv.append(div);
    })

    Object.keys(familyList).forEach(family => {
      let div = document.createElement("a");
        div.textContent = family;
        familyDiv.append(div);
    })

    Object.keys(orderList).forEach(order => {
      let div = document.createElement("a");
        div.textContent = order;
        orderDiv.append(div);
    })
    



  })
  .catch(error => {
    console.log("ERROR", error);
  });
})

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