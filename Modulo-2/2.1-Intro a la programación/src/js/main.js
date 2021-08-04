'use strict';

//Ejercicio 1 (añadir algo al html desde javascript)
document.querySelector('h1').innerHTML='Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';

//Ejercicio 2 (Tener dos variables igual y que te salga el error en consola, por ello hemos cambiado el nombre de la segunda variable) También podriamos ponerle varible let y asi no se pisarian

const homeAddress = 'Calle venezuela';
const secondHomeAddress = ' Calle Barcelona';
 
//Ejercicio 3 ( cambiar texto ya escrito del html desde javascript)

// primero tendriamos que hacer una variable para poder coger ese fragmento
const pElement =document.querySelector('p');
// ahora deberiamos cambiar el texto, esto se puede hacer de dos formas

//1) la variable la cambiamos directamente por el texto deseado
// pElement.innerHTML= 'Hola mundo'; ( dejo comentado esta forma para que no de problemas)

// a la variable le añadimos el texto que queremos, en este caso "mundo"
pElement.innerHTML= pElement.innerHTML + ' mundo'; //recordad poner una  sepación entre las comillas y el mundo, si no el texto se verá junto

//Ejercicio 4. Elegir la selecionada desde javascript
// creador dos Variables una para el h2 y otra para el li
const bestAdalaber= document.querySelector('.theBest');
const winner = document.querySelector('h2');
// Después solo tendremos que unir las variables.
winner.innerHTML= winner.innerHTML + bestAdalaber.innerHTML;





