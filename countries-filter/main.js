//1.Realitzar una crida a l'API per recuperar tots els paisos.

window.addEventListener('load', async function (event) {
  let url = "https://restcountries.com/v3.1/all/";
  let response = await fetch(url);

  //2.Per a cada país hem de crear un div i omplir la seva propietat innerHTML amb l'estructura d'exmple que tenim a l'index.html.
  let countries = await response.json();
  
  let selectRegion = document.querySelector("#regions");
    
    selectRegion.addEventListener("change",function(event){
      console.log(event.target.value)
    });

  countries.forEach(country => {

    
    let card = document.createElement("div");
    card.classList.add("card");

    //Maquetar el païs amb l'HTML que ens han donat
    card.innerHTML = `<img class="flag" src="${country.flags.svg}" alt="${country.name.official} flag" />
    <div class="content">
      <h3 class="name">${country.name.official}</h3>
      <div><span class="country-info">Population: </span><span class="population">${country.population}</span></div>
      <div><span class="country-info">Region: </span><span class="region">${country.region}</span></div>
  
      <div><span class="country-info">Capital: </span><span class="capital">${country.capital}</span></div>
    </div>`


    //3.cada div l'hem d'afedir com a fill del contenidor class="cards"
    document.querySelector(".cards").appendChild(card)


    
  });

  console.log(countries)
});

