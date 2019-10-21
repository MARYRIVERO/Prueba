//Ocultando las pantalla//
welcome.style.display = "none"
DC.style.display = "none"
Marvel.style.display = "none"
resultados.style.display ="none"

//Contador
let contador = 0;

//Mostrar la segunda Vista//

function ingresar(){
    //Capturar el valor del nombre de la primera vista//
const valor = document.getElementById("name").value;

document.getElementById("name_mensaje").innerHTML = "¡ Hola ! "+ valor;


const welcome = document.getElementById("welcome");
welcome.style.display = "block"
//console.log ("hola, welcome")

//Ocultar el home//
const home = document.getElementById("home");
home.style.display = "none"

}

function triviaDC(){

const DC = document.getElementById("DC")
DC.style.display = "block"

//Ocultando welcome//

welcome.style.display = "none"
}

function triviaMarvel(){
const Marvel = document.getElementById("Marvel")
Marvel.style.display = "block"
//Ocultando welcome//
 welcome.style.display = "none"
}

function resultadoDC(){

    const inputDcOne =document.querySelector('input[name="dc_one"]:checked');
    contador = contador + parseInt(inputDcOne.value);
    
    const inputDcTwo =document.querySelector('input[name="dc_two"]:checked');
    contador = contador + parseInt(inputDcTwo.value);
    
    const inputDcThree =document.querySelector('input[name="dc_three"]:checked');
    contador = contador + parseInt(inputDcThree.value);

    const resultados = document.getElementById("resultados")

resultados.style.display = "block"
DC.style.display = "none"

//nos muestra la cantidad de aciertos//
document.getElementById("aciertosMensajes").innerHTML = contador;

}

function resultadoMarvel(){

const inputMarvelOne =document.querySelector('input[name="marvel_one"]:checked');
contador = contador + parseInt(inputMarvelOne.value);

const inputMarvelTwo =document.querySelector('input[name="marvel_two"]:checked');
contador = contador + parseInt(inputMarvelTwo.value);

const inputMarvelThree =document.querySelector('input[name="marvel_three"]:checked');
contador = contador + parseInt(inputMarvelThree.value);

  // const resultados = document.getElementById("resultados")
  resultados.style.display = "block"
  Marvel.style.display = "none"

// Nos muestra la cantidad de aciertos.
  document.getElementById("aciertosMensajes").innerHTML = contador;
}

function volver() {    
    contador=0; 
    welcome.style.display ='block'    
    resultados.style.display = 'none'

    /// Refrescar los radio en Marvel
    const retornar=document.querySelector('input[name="dc_one"]:checked');
     retornar.checked = false;
     const retornar1=document.querySelector('input[name="dc_two"]:checked');
     retornar1.checked = false;
     const retornar2=document.querySelector('input[name="dc_three"]:checked');
     retornar2.checked = false;

    /// Refrescar los radio en Marvel
     const retornar4=document.querySelector('input[name="marvel_one"]:checked');
     retornar4.checked = false;
     const retornar5=document.querySelector('input[name="marvel_two"]:checked');
     retornar5.checked = false;
     const retornar6=document.querySelector('input[name="marvel_three"]:checked');
     retornar6.checked = false;

  }