let prikaz = document.querySelector(".glavni");
let container = document.querySelector(".container");
let input = document.querySelector("#find");

let zemljaInfo = [];

async function preuzmi() {
  let data = await fetch("https://restcountries.com/v3.1/all");
  let res = data.json();
  return res;
}

async function searchCountries(query) {
  let data = await fetch(`https://restcountries.com/v3.1/name/${query}`);
  let res = await data.json();
  return res;
}

async function showCountries(query) {
  if (query === "") {
    zemljaInfo = await preuzmi();
  } else {
    zemljaInfo = await searchCountries(query);
  }
  prikaz.innerHTML = "";
  zemljaInfo.forEach((el) => {
    createCard(el.name.common, el.capital?.[0], el.population, el.flags.png);
  });
}

input.addEventListener("input", () => {
  showCountries(input.value);
});

showCountries("");

function createCard(name, capital, population, slika) {
  let card = document.createElement("div");
  card.className = "card";

  let p1 = document.createElement("p");
  p1.innerText = "Country: " + name;

  let p2 = document.createElement("p");
  p2.innerText = "Capital City: " + (capital || "N/A");

  let p3 = document.createElement("p");
  p3.innerText = "Population: " + population;

  let p4 = document.createElement("img");
  p4.src = slika;
  p4.className = "slika";

  card.addEventListener("click", () => {
    window.location.href = `details.html?name=${name}`;
  });
  card.appendChild(p4);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  prikaz.appendChild(card);
}

  

 


