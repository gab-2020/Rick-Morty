const API_URL= "https://rickandmortyapi.com/api/";
const PERSONAJES_URL= "character/:id";
const OPCIONES= {crossDomain: true};

const PERSONAJE = function (personaje) {
    document.write (`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, soy originario
    de ${personaje.location}${"<br><br>"}`);
}

function LlamarPersonaje (id) {
const URL= `${API_URL}${PERSONAJES_URL.replace (":id",id}`;
$.get (URL, OPCIONES, PERSONAJE);

}











