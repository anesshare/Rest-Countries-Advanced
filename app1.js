const params = new URLSearchParams(window.location.search);
const id = params.get("name");
console.log(id);
let prikaz = document.querySelector(".prikaz");
async function preuzmi(){
    let data = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    let response = data.json()
    return response;
    }
    preuzmi().then((d)=>{
        zemljaInfo = d;
        console.log(zemljaInfo);
        zemljaInfo.forEach((el)=>{
            createCard(el.name,el.capital,el.population,el.flags.png,el.continents);    
})
    })
    
    function createCard(name,capital,population,slika,continents){
       let card = document.createElement("div");
       card.className = "card";
       
       let p1 = document.createElement("p");
       p1.innerText=  "Country: "+name.common;
    
       let p2 = document.createElement("p");
      p2.innerText=  "Capital City: " + capital;
    
       let p3 = document.createElement("p");
       p3.innerText= "Population: "+population;
       
       let p6 = document.createElement("img");   
       p6.src = slika;
       p6.className = "slika";

       let p5= document.createElement("p");
       p5 = "Continent: "+continents;
       card.appendChild(p6);
       card.appendChild(p1)    
        card.appendChild(p2);
        card.appendChild(p3);
        card.append(p5)
        prikaz.appendChild(card);
    }
