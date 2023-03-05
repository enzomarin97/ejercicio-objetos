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


const datosAmigos = {
    nombre: "mario",
    apellido: "figueroa",
    edad: 26,
    altura: 177,
    eresDesarrollador: false,

    nombre_2: "maria",
    apellido_2: "romero",
    edad_2: 29,
    altura_2: 165,
    eresDesarrollador_2: true
};

const lista = [datosPersonales, datosAmigos];
console.log(lista);

const listaNueva = lista.sort((a,b) => b.edad - a.edad);

console.log(listaNueva);

