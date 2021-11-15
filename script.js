const url = "https://www.fruityvice.com/api/fruit/all";

fetch(url)
.then(res => res.json())
.then(fruitData => {
  console.log("FRUIT DATA", fruitData);
});