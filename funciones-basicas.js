// Ejercicio 1: 4 versiones de función promedio

// 1.1 Función declarada
function promedioDeclarado(a, b, c) {
    return (a + b + c) / 3;
}

// 1.2 Función expresada
const promedioExpresado = function(a, b, c) {
    return (a + b + c) / 3;
};

// 1.3 Función flecha con bloque
const promedioFlechaBloque = (a, b, c) => {
    return (a + b + c) / 3;
};

// 1.4 Función flecha simplificada
const promedioFlechaSimple = (a, b, c) => (a + b + c) / 3;

// Ejercicio 2: Función flecha evaluarNumero
const evaluarNumero = (numero) => {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
};

// Ejercicio 3: Función operar con callbacks para operaciones aritméticas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";
const modulo = (a, b) => b !== 0 ? a % b : "Error: División por cero";
const potencia = (a, b) => Math.pow(a, b);

const operar = (a, b, operacion) => {
    return operacion(a, b);
};

// Ejercicio 4: Función calcularTotal con callback
const calcularTotal = (precio1, precio2, callback) => {
    const total = precio1 + precio2;
    callback(total);
};

// Ejercicio 5: Función mostrarResultado con función interna
function mostrarResultado(numero) {
    function calcularDoble(x) {
        return x * 2;
    }
    
    const resultado = calcularDoble(numero);
    return `El doble de ${numero} es ${resultado}`;
}

// Pruebas de los ejercicios 1-5
console.log("=== EJERCICIOS 1-5 ===");
console.log("1. Promedio declarado (2,4,6):", promedioDeclarado(2, 4, 6));
console.log("1. Promedio expresado (1,3,5):", promedioExpresado(1, 3, 5));
console.log("1. Promedio flecha bloque (10,20,30):", promedioFlechaBloque(10, 20, 30));
console.log("1. Promedio flecha simple (5,10,15):", promedioFlechaSimple(5, 10, 15));

console.log("\n2. Evaluar número 5:", evaluarNumero(5));
console.log("2. Evaluar número -3:", evaluarNumero(-3));
console.log("2. Evaluar número 0:", evaluarNumero(0));

console.log("\n3. Operaciones:");
console.log("Suma (5,3):", operar(5, 3, sumar));
console.log("Resta (8,3):", operar(8, 3, restar));
console.log("Multiplicación (4,5):", operar(4, 5, multiplicar));
console.log("División (10,2):", operar(10, 2, dividir));
console.log("División por cero (10,0):", operar(10, 0, dividir));
console.log("Módulo (10,3):", operar(10, 3, modulo));
console.log("Potencia (2,3):", operar(2, 3, potencia));

console.log("\n4. Calcular total con callback:");
calcularTotal(25, 35, (total) => {
    console.log("El total es:", total);
});

console.log("\n5. Mostrar resultado:", mostrarResultado(8));