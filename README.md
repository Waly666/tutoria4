# Tutoría 4 - Funciones en JavaScript

## Contenido de la Tutoría

En esta cuarta tutoría se cubrieron los siguientes temas sobre **funciones en JavaScript**:

### 1. ¿Qué es una función?
Una función es un bloque de código reutilizable que realiza una tarea específica.

### 2. Sintaxis básica de funciones

```javascript
// Declaración de función
function nombreFuncion(parametro1, parametro2) {
    // código a ejecutar
    return resultado;
}

// Llamar a la función
nombreFuncion(valor1, valor2);
```

### 3. Tipos de funciones

#### Función declarada (Function Declaration)
```javascript
function saludar(nombre) {
    return "Hola, " + nombre;
}
```

#### Función expresada (Function Expression)
```javascript
const saludar = function(nombre) {
    return "Hola, " + nombre;
};
```

#### Función flecha (Arrow Function)
```javascript
const saludar = (nombre) => {
    return "Hola, " + nombre;
};

// Versión corta para funciones de una línea
const saludar = nombre => "Hola, " + nombre;
```

### 4. Parámetros y argumentos
- **Parámetros**: Variables definidas en la declaración de la función
- **Argumentos**: Valores reales pasados al llamar la función

```javascript
function sumar(a, b) {  // a y b son parámetros
    return a + b;
}

sumar(5, 3);  // 5 y 3 son argumentos
```

### 5. Return
La palabra clave `return` devuelve un valor y termina la ejecución de la función.

```javascript
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    }
    return false;
}
```

## Ejercicios realizados

Los ejercicios de esta tutoría se encuentran en el archivo `ejercicios.js`.