async function getData(){
    const main = document.getElementById("main-page");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=75/");
    const data = await response.json();
    console.log(data.results);
    const helperDiv = document.createElement("div");
    for(pokeData of data.results){
        const pokeName = document.createElement("h3");
        pokeName.textContent = pokeData.name;
        helperDiv.appendChild(pokeName);
    }
    main.appendChild(helperDiv);
}

getData();