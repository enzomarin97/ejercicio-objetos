/* Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const datosPersonales = {
    nombre: "enzo",
    apellido: "marin",
    edad: 25,
    altura: 170,
    eresDesarrollador: false
};

const edadE = "edad";
console.log(datosPersonales[edadE]);

//otra forma de obtener la edad del objeto por una variable seria:
const edadM = datosPersonales.edad;
console.log(edadM);


/**
 * en el enunciado habia entendido que debia crear UN OBJETO con los datos personales de
 * dos amigos, por eso no podia hacer el ordenamiento por edad (al tener 2 variables del mismo objeto con nombre diferentes)
 * entonces ahora crearé UN objeto para cada amigo y despues lo ordenaré
 */
const datosAmigo1 = {
    nombre: "mario",
    apellido: "figueroa",
    edad: 26,
    altura: 177,
    eresDesarrollador: false,
};
const datosAmigo2 = {
    nombre: "maria",
    apellido: "romero",
    edad: 29,
    altura: 165,
    eresDesarrollador: true
}

//ahora concateno los 3 objetos en una lista
const lista = [datosPersonales, datosAmigo1, datosAmigo2];
console.log(lista);

//ahora ordeno de mayor a menor
const listaNueva = lista.sort((a,b) => b.edad - a.edad);
console.log(listaNueva);