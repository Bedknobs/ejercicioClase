const jsonObject = {
    "title": "Zoolocos",
    "since": 2013,
    "animals": [{
        "name": "Cebra",
        "age": 4,
        "habitat": "Sudeste africano",
        "img": "./cebra.png"
    },
    {
        "name": "León",
        "age": 8,
        "habitat": "Sabanas y llanuras",
        "img": "./leon.jpg"
    },
    {
        "name": "Elefante",
        "age": 2,
        "habitat": "Selva tropical y sabana",
        "img": "./elefante.jpg"
    },
    {
        "name": "Llama",
        "age": 10,
        "habitat": "Altiplano cubierto de arbustos, árboles atrofiados y pastos",
        "img": "./llama.webp"
    },
    {
        "name": "Oso",
        "age": 16,
        "habitat": "Desde los hielos árticos hasta las selvas tropicales",
        "img": "./oso.jpg"
    },
]
}

let header = document.getElementById("header");
let section = document.getElementById("section");

function zooHeader(jsonObject){
    const myH1 = document.createElement("h1");
    myH1.textContent = jsonObject["title"];
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = "Formed since " + jsonObject["since"];
    header.appendChild(myPara);
}

function zooAnimals(jsonObject){
    const animals = jsonObject["animals"];
    for (let i = 0; i < animals.length; i++){
        const animalName = document.createElement("h3");
        const animalAge = document.createElement("p");
        const animalHabitat = document.createElement("p");
        const animalImg = document.createElement("img");

        animalName.textContent = animals[i].name;
        animalAge.textContent = "Tiene " + animals[i].age + " años";
        animalHabitat.textContent = "Habitat: " + animals[i].habitat;
        animalImg.textContent = animals[i].img;

        section.appendChild(animalName);
        section.appendChild(animalAge);
        section.appendChild(animalHabitat);
        section.appendChild(animalImg);
    }
}

zooHeader(jsonObject);
zooAnimals(jsonObject);