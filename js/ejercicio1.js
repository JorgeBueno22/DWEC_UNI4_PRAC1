window.addEventListener('load', inicioPagina);

var personajes = ['foto1', 'foto2', 'foto3','foto4', 'foto5', 'foto6', 'foto7'];
var indice = 0;

function inicioPagina(){

    //Eventos 
document.getElementById("ultima").addEventListener("click", ultima, false);
document.getElementById("primera").addEventListener("click", primera, false);
document.getElementById("anterior").addEventListener("click", anterior, false);
document.getElementById("siguiente").addEventListener("click", siguiente, false);

//Genera la primera imagen
    aleatoria();
    //Condiciona dependiendo de la posicion el estado de los botones
    if(indice == 1){
        document.getElementById("primera").classList.add("deshabilitado");
        document.getElementById("anterior").classList.add("deshabilitado");
    }
    else if(indice == 7){
        document.getElementById("siguiente").classList.add("deshabilitado");
        document.getElementById("ultima").classList.add("deshabilitado");
    }
    document.querySelector('#imagen').style.backgroundImage = 'url(images/foto'+indice+'.jpg)';

}
//Se ocupa de generar la primerar imagen
function aleatoria(){
    indice = Math.floor(Math.random() * personajes.length);
    console.log([indice++]);
}
//Muestra la ultima imagen 
function ultima(){
    indice = personajes.length;
    console.log(indice);
    document.querySelector('#imagen').style.backgroundImage = 'url(images/foto'+indice+'.jpg)';
    document.getElementById("siguiente").classList.add("deshabilitado");
    document.getElementById("ultima").classList.add("deshabilitado");
    document.getElementById("primera").classList.add("habilitado");
    document.getElementById("anterior").classList.add("habilitado");
    document.getElementById("siguiente").classList.remove("habilitado");
    document.getElementById("ultima").classList.remove("habilitado");
    document.getElementById('siguiente').disabled = true;
    document.getElementById('ultima').disabled = true;
}
//Muestra la primer imagen
function primera(){
    indice = 1;
    console.log(indice);
    document.querySelector('#imagen').style.backgroundImage = 'url(images/foto'+indice+'.jpg)';
    document.getElementById("primera").classList.add("deshabilitado");
    document.getElementById("anterior").classList.add("deshabilitado");
    document.getElementById("siguiente").classList.add("habilitado");
    document.getElementById("ultima").classList.add("habilitado");
    document.getElementById("primera").classList.remove("habilitado");
    document.getElementById("anterior").classList.remove("habilitado");
    document.getElementById('primera').disabled = true;
    document.getElementById('anterior').disabled = true;
}
//Retrocede una imagen
function anterior(){
    if(indice>1){
        indice -= 1;
    }
    console.log(indice);
    document.querySelector('#imagen').style.backgroundImage = 'url(images/foto'+indice+'.jpg)';
    document.getElementById("primera").classList.add("habilitado");
    document.getElementById("anterior").classList.add("habilitado");
    document.getElementById("siguiente").classList.add("habilitado");
    document.getElementById("ultima").classList.add("habilitado");
    if(indice == 1){
        document.getElementById("primera").classList.remove("habilitado");
        document.getElementById("anterior").classList.remove("habilitado");
        document.getElementById("primera").classList.add("deshabilitado");
        document.getElementById("anterior").classList.add("deshabilitado");
    }
}
//Avanza una imagen
function siguiente(){
    if(indice<7){
        indice += 1;
    }
    console.log(indice);
    document.querySelector('#imagen').style.backgroundImage = 'url(images/foto'+indice+'.jpg)';
    document.getElementById("primera").classList.add("habilitado");
    document.getElementById("anterior").classList.add("habilitado");
    document.getElementById("siguiente").classList.add("habilitado");
    document.getElementById("ultima").classList.add("habilitado");
    if(indice == 7){
        document.getElementById("siguiente").classList.remove("habilitado");
        document.getElementById("ultima").classList.remove("habilitado");
        document.getElementById("siguiente").classList.add("deshabilitado");
        document.getElementById("ultima").classList.add("deshabilitado");
    }
}

