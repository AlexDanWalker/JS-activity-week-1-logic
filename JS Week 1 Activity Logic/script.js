//  Clasificador de triángulos 
function clasificarTriangulo(lado1, lado2, lado3) {
  if (
    lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1
  ) {
    if (lado1 === lado2 && lado2 === lado3) {
      return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  } else {
    return "Error: no es un triángulo válido.";
  }
}

console.log(" Clasificador de triángulos:");
console.log(clasificarTriangulo(5, 5, 5)); // Equilátero
console.log(clasificarTriangulo(5, 5, 3)); // Isósceles
console.log(clasificarTriangulo(5, 4, 3)); // Escaleno
console.log(clasificarTriangulo(1, 2, 10)); // Error

//  Métodos de arrays
console.log("\n Métodos de arrays:");

let frutas = ["manzana", "pera", "uva"];
frutas.shift();
console.log("Frutas sin la primera:", frutas);

let numeros = [1, 2, 3];
numeros.push(4);
console.log("Numeros con nuevo final:", numeros);

let palabras = ["mundo", "bonito"];
palabras.unshift("Hola");
console.log("Palabras con nuevo inicio:", palabras);

let colores = ["rojo", "verde", "azul"];
colores.pop();
console.log("Colores sin el último:", colores);

let arrayOriginal = [1, 2, 3, 4, 5];
let porcion = arrayOriginal.slice(1, 4);
console.log("Porción del array original:", porcion);

let reemplazar = ["a", "b", "c"];
reemplazar[1] = "x";
console.log("Array con reemplazo:", reemplazar);

let unir = ["Hola", "mundo"];
let frase = unir.join(" ");
console.log("Frase unida:", frase);

let nombres = ["Carlos", "Ana", "Luis"];
nombres.sort();
console.log("Nombres ordenados:", nombres);

let invertir = [1, 2, 3];
invertir.reverse();
console.log("Array invertido:", invertir);

let contiene = ["sol", "luna", "estrella"];
let existe = contiene.includes("luna");
console.log("¿Contiene 'luna'?", existe);

//  Bucles sin listas
console.log("\n Bucles sin listas:");

let palabra = "Hola";
for (let letra of palabra) {
  console.log("Letra:", letra);
}

for (let i = 1; i <= 5; i++) {
  console.log("Contador:", i);
}

for (let i in palabra) {
  console.log(`Posición ${i}: ${palabra[i]}`);
}

//  Bucles con arrays
console.log("\n Bucles con arrays:");

let listaNombres = ["Ana", "Luis", "Carlos"];
for (let nombre of listaNombres) {
  console.log(`Hola, ${nombre}`);
}

let listaColores = ["rojo", "verde", "azul"];
for (let indice in listaColores) {
  console.log(`Índice de color: ${indice}`);
}

let arrayNumeros = [10, 20, 30];
for (let i in arrayNumeros) {
  console.log(`Índice ${i}: Valor ${arrayNumeros[i]}`);
}

//  Objetos
console.log("\n Objetos:");

let persona = {
  nombre: "Daniel",
  edad: 30,
  ciudad: "Bogotá"
};
console.log("Nombre de persona:", persona.nombre);

let libro = {
  titulo: "El Quijote",
  autor: "Cervantes"
};
libro.titulo = "Don Quijote de la Mancha";
console.log("Libro actualizado:", libro);

let auto = {
  marca: "Toyota"
};
auto.color = "rojo";
console.log("Auto con color:", auto);

let estudiante = {
  nombre: "Laura",
  edad: 22,
  carrera: "Ingeniería"
};
for (let clave in estudiante) {
  console.log(`${clave}: ${estudiante[clave]}`);
}

//  Funciones
console.log("\n Funciones:");

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Daniel"));

function sumar(a, b) {
  return a + b;
}
console.log("Suma:", sumar(3, 5));

function esPar(numero) {
  return numero % 2 === 0;
}
console.log("¿Es 4 par?", esPar(4));

function areaRectangulo(base, altura) {
  return base * altura;
}
console.log("Área del rectángulo:", areaRectangulo(4, 5));

function celsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log("25°C en Fahrenheit:", celsiusAFahrenheit(25));
