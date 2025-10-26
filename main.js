// Laboratorio - Funciones JavaScript
// Autor: [Tu nombre]
// Colaboró: [Nombres de colaboradores o IA]
// Tiempo: [Tiempo empleado]

// Importar las funciones (en Node.js usar require, en navegador usar <script>)
// Para VS Code, puedes ejecutar con Node.js

console.log("🚀 LABORATORIO - FUNCIONES JAVASCRIPT");
console.log("=====================================\n");

// Ejecutar ejercicios 1-5
require('./funciones-basicas.js');

// Ejecutar ejercicios 6-15  
require('./funciones-arreglos.js');

// Pruebas adicionales integradas
console.log("\n=== PRUEBAS ADICIONALES INTEGRADAS ===");

// Prueba integrada: Cadena de operaciones
const numeros = [10, -5, 8, -3, 15, 7, -1, 20];
console.log("Arreglo original:", numeros);
console.log("Pares al cuadrado:", paresAlCuadrado(numeros));
console.log("Suma de positivos:", sumaPositivos(numeros));
console.log("Menor y mayor:", menorYMayor(numeros));

// Prueba con operaciones matemáticas
console.log("\n--- Operaciones Matemáticas ---");
console.log("Operar con callback (5, 3, multiplicar):", operar(5, 3, multiplicar));
console.log("Promedio de 10, 20, 30:", promedioFlechaSimple(10, 20, 30));

// Prueba con conjuntos complejos
console.log("\n--- Conjuntos Complejos ---");
const conjuntoA = [1, 1, 2, 3, 4, 4, 5];
const conjuntoB = [3, 4, 5, 6, 7];
console.log("Conjunto A:", conjuntoA);
console.log("Conjunto B:", conjuntoB);
console.log("Diferencia simétrica:", diferenciaSimetrica(conjuntoA, conjuntoB));
console.log("¿A ⊆ B?:", esSubconjunto(conjuntoA, conjuntoB));
console.log("¿[3,4,5] ⊆ B?:", esSubconjunto([3, 4, 5], conjuntoB));

console.log("\n✅ Todos los ejercicios completados correctamente!");