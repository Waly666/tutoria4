// ===================================
// TUTORÍA 4 - EJERCICIOS DE FUNCIONES
// ===================================

// Ejercicio 1: Crear una función que salude por consola
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

// Llamar a la función
saludar("Estudiante");

// -----------------------------------

// Ejercicio 2: Función que suma dos números y retorna el resultado
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log("La suma es: " + resultado);

// -----------------------------------

// Ejercicio 3: Función que determina si un número es par o impar
function esPar(numero) {
    return numero % 2 === 0;
}

console.log("¿El 4 es par? " + esPar(4)); // true
console.log("¿El 7 es par? " + esPar(7)); // false

// -----------------------------------

// Ejercicio 4: Función flecha para calcular el área de un rectángulo
const calcularArea = (base, altura) => base * altura;

console.log("El área del rectángulo es: " + calcularArea(5, 10));

// -----------------------------------

// Ejercicio 5: Función que cuenta del 1 al 10
function contarHasta10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

console.log("Contando del 1 al 10:");
contarHasta10();

// -----------------------------------

// Ejercicio 6: Función que calcula el factorial de un número
function factorial(n) {
    if (n < 0) {
        return undefined; // No existe factorial de números negativos
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("El factorial de 5 es: " + factorial(5)); // 120
