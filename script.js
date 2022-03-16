//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "buenos days &#10024";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "buena! &#9996";
} else {
    elSaludo = "adiós &#9996";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=5&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
       //  x = Math.round(random(0,1)*10); 
        pagina();
    }

}

function portada() {
    createSpan(" ¿Sabías tú que " + starWars.results[0].name + " mide " + starWars.results[0].height + " mm y tiene los ojos color " + starWars.results[0].eye_color + "? Además, su pelo es " + starWars.results[0].hair_color + ".").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
     // console.log
    createSpan(" ¿Sabías tú que " + starWars.results[3].name + " mide " + starWars.results[3].height + " mm y tiene los ojos color " + starWars.results[3].eye_color + "? Increíble.").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}
